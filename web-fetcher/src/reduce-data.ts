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
  for (const file of fs.readdirSync(articlePath)) {
    const article = readJson(path.join(articlePath, file));
    writeJson(path.join(targetDir, 'articles', file), {
      name: article.name,
      regulated_description: article.regulated_description,
      image: {
        original: article.image.original,
      },
      price: article.price.item ? article.price.item.price : null,
      kcal: article.nutrition_facts?.standard?.nutrients?.find(
        (s) => s.code === 'PIM_NUT_ENERGIE'
      )?.quantity_alternate,
    });
  }
}

main();
