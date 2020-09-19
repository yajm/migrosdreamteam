import { Injectable } from '@angular/core';
import { ApiModule } from '../api.module';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../../purchase/models/purchase';
import { Product } from '../../purchase/models/product';
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

  getPurchaseArticles(): Promise<{ [key: string]: Product[] }> {
    return this.http
      .get<{ [key: string]: Product[] }>('/assets/data/purchase-articles.json')
      .toPromise();
  }

  getProductInfo(productId: string): Promise<ProductInfo> {
    return this.http
      .get<ProductInfo>(`/assets/data/articles/${productId}.json`)
      .toPromise();
  }
}
