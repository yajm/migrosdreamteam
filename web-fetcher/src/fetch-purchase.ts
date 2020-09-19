import * as axios from 'axios';
import * as path from 'path';
import { writeJson } from './utils';
import { PurchaseArticle } from './reduce-data';

axios.default.defaults.headers.common['Authorization'] =
  'Basic aGFja3p1cmljaDIwMjA6dWhTeUowOEtleEtuNFpGUw==';

const purchasesFile = path.join(process.cwd(), 'assets/purchases.json');
const purchaseArticlesFile = path.join(
  process.cwd(),
  'assets/purchase-articles.json'
);

async function main() {
  const purchases = await axios.default.get(
    'https://hackzurich-api.migros.ch/hack/purchase/102531'
  );

  writeJson(purchasesFile, purchases.data);

  const purchaseArticles: { [key: string]: PurchaseArticle } = {};
  for (const purchase of purchases.data) {
    const articles = await axios.default.get(
      `https://hackzurich-api.migros.ch/hack/purchase/102531/${purchase.einkaufID}/articles`
    );
    purchaseArticles[purchase.einkaufID] = articles.data;
  }

  writeJson(purchaseArticlesFile, purchaseArticles);
}

main();
