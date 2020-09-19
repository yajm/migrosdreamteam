import { Injectable } from '@angular/core';
import { ApiModule } from '../api.module';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../../purchase/models/purchase';
import { Product } from '../../purchase/models/product';

@Injectable({
  providedIn: ApiModule,
})
export class AssetApiService {
  constructor(private http: HttpClient) {}

  getPurchases() {
    return this.http.get<Purchase[]>('/assets/data/purchases.json').toPromise();
  }

  getPurchaseArticles() {
    return this.http
      .get<{ [key: string]: Product[] }>('/assets/data/purchase-articles.json')
      .toPromise();
  }
}
