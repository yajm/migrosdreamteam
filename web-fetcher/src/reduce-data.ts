import * as path from 'path';
import * as fs from 'fs';
import { existsArticle, readJson, writeJson } from './utils';

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

  for (const file of fs.readdirSync(articlePath)) {
    const article = readJson(path.join(articlePath, file));
    let deepestCategory = null;
    for (const category of article.categories || []) {
      if (deepestCategory == null || deepestCategory.level < category.level) {
        deepestCategory = category;
      }
    }
    const reducedArticle = {
      data: {
        name: article.name,
        categorySlug: deepestCategory?.slug,
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
    if (deepestCategory) {
      if (!categorySlugs[deepestCategory.slug]) {
        categorySlugs[deepestCategory.slug] = [];
      }
      categorySlugs[deepestCategory.slug].push(reducedArticle);
    }
    reducedArticles.push(reducedArticle);
  }

  for (const categorySlug of Object.keys(categorySlugs)) {
    let priceMin = Number.MAX_VALUE;
    let priceMax = Number.MIN_VALUE;

    for (const article of categorySlugs[categorySlug]) {
      if (article.data.price === null || article.data.price === undefined) {
        continue;
      }
      if (article.data.price > priceMax) {
        priceMax = article.data.price;
      }
      if (article.data.price < priceMin) {
        priceMin = article.data.price;
      }
    }

    const priceRange = priceMax - priceMin;
    for (const article of categorySlugs[categorySlug]) {
      if (article.data.price === null || article.data.price === undefined) {
        continue;
      }

      article.data.priceRange = priceRange;
      article.data.priceMax = priceMax;
      article.data.priceMin = priceMin;
      article.data.priceScore =
        1 - (article.data.price - priceMin) / priceRange;
    }
  }

  for (const reducedArticle of reducedArticles) {
    writeJson(
      path.join(targetDir, 'articles', reducedArticle.file),
      reducedArticle.data
    );
  }
}

main();
