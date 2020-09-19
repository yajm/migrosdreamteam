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

async function main() {
  const purchaseArticles = readJson(purchaseArticlesFile);
  for (const purchaseId of Object.keys(purchaseArticles)) {
    const articles: any[] = purchaseArticles[purchaseId];
    for (let i = articles.length - 1; i >= 0; i--) {
      if (!existsArticle(articles[i].artikelID)) {
        articles.splice(i, 1);
      }
    }
  }
  writeJson(path.join(targetDir, 'purchase-articles.json'), purchaseArticles);

  const articlePath = path.join(process.cwd(), 'assets/articles');
  const reducedArticles: { file: string; data: any }[] = [];
  const categorySlugs: { [key: string]: any[] } = {};
  const articleMap: { [key: string]: any } = {};

  for (const file of fs.readdirSync(articlePath)) {
    const article = readJson(path.join(articlePath, file));
    const deepestCategory = getDeepestCategory(article);
    const reducedArticle = {
      data: {
        id: article.id,
        name: article.name,
        categoryCode: deepestCategory?.code,
        regulated_description: article.regulated_description,
        image: {
          original: article.image.original,
        },
        price: article.price.item ? article.price.item.price : null,
        kcal: article.nutrition_facts?.standard?.nutrients?.find(
          (s) => s.code === 'PIM_NUT_ENERGIE'
        )?.quantity_alternate,
      },
      file,
    };
    articleMap[article.id] = reducedArticle.data;
    if (deepestCategory) {
      if (!categorySlugs[deepestCategory.code]) {
        categorySlugs[deepestCategory.code] = [];
      }
      categorySlugs[deepestCategory.code].push(reducedArticle);
    }
    reducedArticles.push(reducedArticle);
  }

  function aggregateScore(scoreKey: string, selector: (data: any) => any) {
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
          article.data[scoreKey] = 1 - (value - categoryMin) / valueRange;
        }
      }
    }
  }

  aggregateScore('priceScore', (article) => article.price);
  aggregateScore('kcalScore', (article) => article.kcal);
  aggregateScore('co2Score', (article) => 1);
  aggregateScore(
    'totalScore',
    (article) =>
      (article.priceScore ?? 0) +
      (article.kcalScore ?? 0) +
      (article.co2Score ?? 0)
  );

  for (const categorySlug of Object.keys(categorySlugs)) {
    writeJson(
      path.join(targetDir, 'categories', categorySlug + '.json'),
      categorySlugs[categorySlug].map((a) => articleMap[a.data.id])
    );
  }

  for (const reducedArticle of reducedArticles) {
    writeJson(
      path.join(targetDir, 'articles', reducedArticle.file),
      reducedArticle.data
    );
  }
}

main();
