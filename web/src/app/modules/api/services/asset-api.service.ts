import { Injectable } from '@angular/core';
import { ApiModule } from '../api.module';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../../purchase/models/purchase';
import { ProductInfo } from '../../product/models/product-info';

@Injectable({
  providedIn: ApiModule,
})
export class AssetApiService {
  constructor(private http: HttpClient) {}

  getPurchases(): Promise<Purchase[]> {
    return this.http.get<Purchase[]>('/assets/data/purchases.json').toPromise();
  }

  getCategoryArticles(category: string): Promise<ProductInfo[]> {
    return this.http
      .get<ProductInfo[]>(`/assets/data/categories/${category}.json`)
      .toPromise();
  }

  getPurchaseArticles(purchaseId: string): Promise<ProductInfo[]> {
    return this.http
      .get<ProductInfo[]>(`/assets/data/purchases/${purchaseId}.json`)
      .toPromise();
  }

  getProductInfo(productId: string): Promise<ProductInfo> {
    return this.http
      .get<ProductInfo>(`/assets/data/articles/${productId}.json`)
      .toPromise();
  }
}
