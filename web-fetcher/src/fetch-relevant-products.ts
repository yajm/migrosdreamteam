import * as path from 'path';
import * as fs from 'fs';
import * as axios from 'axios';
import {
  existsArticle,
  getDeepestCategory,
  readJson,
  writeJson,
} from './utils';

axios.default.defaults.headers.common['Authorization'] =
  'Basic aGFja3p1cmljaDIwMjA6dWhTeUowOEtleEtuNFpGUw==';

async function main() {
  const articlePath = path.join(process.cwd(), 'assets/articles');

  for (const file of fs.readdirSync(articlePath)) {
    const data = readJson(path.join(articlePath, file));
    const category = getDeepestCategory(data);
    if (!category) {
      continue;
    }
    console.log(category.code);

    const categoryFolder = path.join(
      process.cwd(),
      'assets/categories/',
      category.code
    );
    if (fs.existsSync(categoryFolder)) {
      continue;
    }

    const items = await retry(() =>
      axios.default.get(
        `https://hackzurich-api.migros.ch/products?facets[category][]=${category.code}`
      )
    );
    fs.mkdirSync(categoryFolder);
    for (const article of items.data.products) {
      if (existsArticle(article.id)) {
        continue;
      }
      writeJson(
        path.join(process.cwd(), 'assets/articles/', article.id + '.json'),
        article
      );
    }
  }
}

async function retry(fn: () => Promise<any>) {
  try {
    console.log('send request');
    const res = await fn();
    return res;
  } catch (e) {
    return retry(fn);
  }
}

main();
