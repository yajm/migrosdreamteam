import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiModule } from '../api.module';
import { ProductInfo } from '../../product/models/product-info';

@Injectable({
  providedIn: ApiModule,
})
export class SearchApiService {
  constructor(private http: HttpClient) {}

  search(id: string): Promise<ProductInfo[]> {
    return this.http
      .get<ProductInfo[]>(environment.searchApiUrl + `/searchproducts/${id}`)
      .toPromise();
  }
}
