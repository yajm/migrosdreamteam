import { Injectable } from '@angular/core';
import { AssetApiService } from '../../api/services/asset-api.service';
import { ProductInfo } from '../../product/models/product-info';

@Injectable()
export class PurchaseStateService {
  private purchases = this.assetApi.getPurchases();
  private purchaseArticles = this.assetApi.getPurchaseArticles();

  constructor(private assetApi: AssetApiService) {}

  async getPurchase(id: string) {
    const data = await this.purchases;
    return data.find((p) => p.einkaufID === id);
  }

  async getPurchases() {
    const data = await this.purchases;
    data.reverse();
    return data;
  }

  async getArticles(purchaseId: string): Promise<ProductInfo[]> {
    const data = await this.purchaseArticles;
    console.log(data, purchaseId);
    const products: ProductInfo[] = [];
    for (const prod of data[purchaseId]) {
      products.push(
        await this.assetApi.getProductInfo(prod.artikelID.toString())
      );
    }
    return products;
  }
}
