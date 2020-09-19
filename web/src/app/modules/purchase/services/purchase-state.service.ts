import { Injectable } from '@angular/core';
import { AssetApiService } from '../../api/services/asset-api.service';

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

  async getArticles(purchaseId: string) {
    const data = await this.purchaseArticles;
    console.log(data, purchaseId);
    return data[purchaseId];
  }
}
