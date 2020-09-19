import * as axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

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

  fs.writeFileSync(purchasesFile, JSON.stringify(purchases.data, null, 2));

  const purchaseArticles: any = {};
  for (const purchase of purchases.data) {
    const articles = await axios.default.get(
      `https://hackzurich-api.migros.ch/hack/purchase/102531/${purchase.einkaufID}/articles`
    );
    purchaseArticles[purchase.einkaufID] = articles.data;
  }

  fs.writeFileSync(
    purchaseArticlesFile,
    JSON.stringify(purchaseArticles, null, 2)
  );
}

main();
