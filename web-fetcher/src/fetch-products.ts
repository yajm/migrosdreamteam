import * as axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { readJson } from './utils';

axios.default.defaults.headers.common['Authorization'] =
  'Basic aGFja3p1cmljaDIwMjA6dWhTeUowOEtleEtuNFpGUw==';

const purchaseArticlesFile = path.join(
  process.cwd(),
  'assets/purchase-articles.json'
);

async function main() {
  const purchaseArticles = readJson(purchaseArticlesFile);

  for (const purchaseId of Object.keys(purchaseArticles)) {
    for (const article of purchaseArticles[purchaseId]) {
      try {
        const articleInfoFile = path.join(
          process.cwd(),
          `assets/articles/${article.artikelID}.json`
        );

        if (fs.existsSync(articleInfoFile)) {
          continue;
        }

        console.log(article.artikelID);
        const info = await axios.default.get(
          `https://hackzurich-api.migros.ch/products/${article.artikelID}`
        );

        fs.writeFileSync(articleInfoFile, JSON.stringify(info.data, null, 2));
      } catch (e) {
        console.log('missing', article.artikelID);
      }
    }
  }
}

main();
