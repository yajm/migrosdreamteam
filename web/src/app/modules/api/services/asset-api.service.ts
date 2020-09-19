import { Injectable } from '@angular/core';
import { ApiModule } from '../api.module';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../../purchase/models/purchase';
import { ProductInfo } from '../../product/models/product-info';
import { Goal } from '../../goal/models/goal';

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

  getProducts(skip: number): Promise<ProductInfo[]> {
    return this.http
      .get<ProductInfo[]>(`/assets/data/product-batches/${skip}-50.json`)
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

  getGoal(): Promise<Goal> {
    return this.http.get<Goal>(`/assets/data/goal.json`).toPromise();
  }
}
