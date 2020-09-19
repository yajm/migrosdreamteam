import * as path from 'path';
import * as fs from 'fs';
import {
  existsArticle,
  getDeepestCategory,
  readJson,
  writeJson,
} from './utils';

const targetDir = path.join(process.cwd(), '../web/src/assets/data');
const purchaseArticlesFile = path.join(
  process.cwd(),
  'assets/purchase-articles.json'
);
const purchasesFile = path.join(process.cwd(), 'assets/purchases.json');
const co2ScoresFile = path.join(
  process.cwd(),
  'assets/co2_scores_little_preped.csv'
);
const co2Scores = fs.readFileSync(co2ScoresFile, { encoding: 'utf8' });
const co2Score: { [key: string]: number } = co2Scores
  .split('\n')
  .reduce((map, line) => {
    const [id, score] = line.split(',');
    map[id] = parseFloat(score);
    return map;
  }, {});

export interface ReducedArticle {
  data: ReducedArticleData;
  file: string;
}

export interface ReducedArticleData {
  id: string;
  name: string;
  categoryCode?: string;
  regulated_description?: string;
  image: {
    original?: string;
  };
  co2: number | undefined;
  price: number | undefined;
  kcal: number | undefined;
  priceScore: number | null;
  totalScore: number | null;
  kcalScore: number | null;
  co2Score: number | null;
}

function reduceArticle(file: string, article: any): ReducedArticle {
  const deepestCategory = getDeepestCategory(article);
  return {
    data: {
      id: article.id,
      name: article.name,
      categoryCode: deepestCategory?.code,
      regulated_description: article.regulated_description,
      image: {
        original: article.image.original,
      },
      co2: co2Score[article.id] ?? undefined,
      price: article.price.item ? article.price.item.price : undefined,
      kcal: article.nutrition_facts?.standard?.nutrients?.find(
        (s) => s.code === 'PIM_NUT_ENERGIE'
      )?.quantity_alternate,
      co2Score: null,
      kcalScore: null,
      priceScore: null,
      totalScore: null,
    },
    file,
  };
}

export interface PurchaseArticle {
  artikelID: string;
  menge: number;
}

async function main() {
  const purchaseArticles: { [key: string]: PurchaseArticle[] } = readJson(
    purchaseArticlesFile
  );
  for (const purchaseId of Object.keys(purchaseArticles)) {
    const articles = purchaseArticles[purchaseId];
    for (let i = articles.length - 1; i >= 0; i--) {
      if (!existsArticle(articles[i].artikelID)) {
        articles.splice(i, 1);
      }
    }
  }

  const purchases = readJson(purchasesFile);

  const articlePath = path.join(process.cwd(), 'assets/articles');
  const reducedArticles: { file: string; data: ReducedArticleData }[] = [];
  const categorySlugs: { [key: string]: ReducedArticle[] } = {};
  const articleMap: { [key: string]: ReducedArticleData } = {};

  for (const file of fs.readdirSync(articlePath)) {
    const article = readJson(path.join(articlePath, file));
    const reducedArticle = reduceArticle(file, article);
    articleMap[article.id] = reducedArticle.data;
    if (reducedArticle.data.categoryCode) {
      if (!categorySlugs[reducedArticle.data.categoryCode]) {
        categorySlugs[reducedArticle.data.categoryCode] = [];
      }
      categorySlugs[reducedArticle.data.categoryCode].push(reducedArticle);
    }
    reducedArticles.push(reducedArticle);
  }

  function aggregateScore(
    scoreKey: string,
    selector: (data: ReducedArticleData) => number,
    reverse: boolean
  ) {
    for (const categorySlug of Object.keys(categorySlugs)) {
      let categoryMin = Number.MAX_VALUE;
      let categoryMax = Number.MIN_VALUE;

      for (const article of categorySlugs[categorySlug]) {
        const value = selector(article.data);
        if (value === null || value === undefined) {
          continue;
        }
        if (value > categoryMax) {
          categoryMax = value;
        }
        if (value < categoryMin) {
          categoryMin = value;
        }
      }

      const valueRange = categoryMax - categoryMin;
      for (const article of categorySlugs[categorySlug]) {
        const value = selector(article.data);
        if (value === null || value === undefined) {
          article.data[scoreKey] = null;
          continue;
        }

        if (valueRange === 0) {
          article.data[scoreKey] = 1;
        } else {
          const score = (value - categoryMin) / valueRange;
          article.data[scoreKey] = reverse ? 1 - score : score;
        }
      }
    }
  }

  aggregateScore('priceScore', (article) => article.price, true);
  aggregateScore('kcalScore', (article) => article.kcal, true);
  aggregateScore('co2Score', (article) => article.co2, true);
  aggregateScore(
    'totalScore',
    (article) =>
      (article.priceScore ?? 0) +
      (article.kcalScore ?? 0) +
      (article.co2Score ?? 0),
    false
  );

  // create category product list
  for (const categorySlug of Object.keys(categorySlugs)) {
    writeJson(
      path.join(targetDir, 'categories', categorySlug + '.json'),
      categorySlugs[categorySlug].map((a) => articleMap[a.data.id])
    );
  }

  // create product info
  for (const reducedArticle of reducedArticles) {
    writeJson(
      path.join(targetDir, 'articles', reducedArticle.file),
      reducedArticle.data
    );
  }

  // create purchase product list
  for (const purchaseId of Object.keys(purchaseArticles)) {
    const articles = purchaseArticles[purchaseId];
    writeJson(
      path.join(targetDir, 'purchases', purchaseId + '.json'),
      articles.map((a) => articleMap[a.artikelID])
    );
  }

  // extend purchases with article count and total score
  for (const purchase of purchases) {
    const articles = purchaseArticles[purchase.einkaufID].map(
      (a) => articleMap[a.artikelID]
    );
    const price = purchaseArticles[purchase.einkaufID].reduce(
      (total, article) => {
        const price = articleMap[article.artikelID].price;
        if (price !== null && price !== undefined) {
          return total + price * article.menge;
        }
        return total;
      },
      0
    );
    const articlesWithScore = articles.filter(
      (a) => a.totalScore !== null && a.totalScore !== undefined
    );
    purchase.totalPrice = price;
    purchase.totalScore =
      articlesWithScore.reduce(
        (value, article) => article.totalScore + value,
        0
      ) / articlesWithScore.length;
    purchase.articleCount = articles.length;
  }
  writeJson(path.join(targetDir, 'purchases.json'), purchases);

  // calculate goal score
  const goals: any = {};
  function aggregateGoalScore(scoreKey: string) {
    let score = 0;
    let count = 0;

    const uniqueArticles: { [key: string]: ReducedArticleData } = {};
    for (const purchase of purchases) {
      const articles = purchaseArticles[purchase.einkaufID].map(
        (a) => articleMap[a.artikelID]
      );
      const articlesWithScore = articles.filter(
        (a) =>
          a[scoreKey] !== null &&
          a[scoreKey] !== undefined &&
          a[scoreKey] !== NaN
      );
      if (articlesWithScore.length === 0) {
        continue;
      }
      for (const article of articlesWithScore) {
        uniqueArticles[article.id] = article;
      }
      score += articlesWithScore.reduce(
        (value, article) => article[scoreKey] + value,
        0
      );
      count += articlesWithScore.length;
    }

    const allArticles = Object.keys(uniqueArticles).map(
      (k) => uniqueArticles[k]
    );
    allArticles.sort((a, b) => b[scoreKey] - a[scoreKey]);
    goals[`${scoreKey}Best`] = allArticles.slice(0, 3);
    goals[`${scoreKey}Worst`] = allArticles.slice(allArticles.length - 3);
    goals[scoreKey] = score / count;
  }
  aggregateGoalScore('priceScore');
  aggregateGoalScore('kcalScore');
  aggregateGoalScore('co2Score');
  writeJson(path.join(targetDir, 'goal.json'), goals);

  // create batch result for product list
  const limit = 50;
  let batch = 0;
  let currentBatch: ReducedArticleData[] = [];
  for (const article of reducedArticles) {
    currentBatch.push(article.data);
    if (currentBatch.length === limit) {
      writeJson(
        path.join(targetDir, 'product-batches', `${batch}-${limit}` + '.json'),
        currentBatch
      );
      batch++;
      currentBatch = [];
    }
  }
}

main();
