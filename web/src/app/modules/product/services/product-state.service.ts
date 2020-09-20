import { Injectable } from '@angular/core';
import { ProductInfo } from '../models/product-info';
import { AssetApiService } from '../../api/services/asset-api.service';
import { Product } from '../../purchase/models/product';
import { SearchApiService } from '../../api/services/search-api.service';

@Injectable()
export class ProductStateService {
  constructor(
    private assetApi: AssetApiService,
    private searchApi: SearchApiService
  ) {}

  async getProducts(skip: number): Promise<ProductInfo[]> {
    return await this.assetApi.getProducts(skip);
  }

  async getSimilarProducts(category: string): Promise<ProductInfo[]> {
    // TODO this.searchApi.search(id)
    return await this.assetApi.getCategoryArticles(category);
  }

  async getInfo(id: string): Promise<ProductInfo> {
    return await this.assetApi.getProductInfo(id);
  }
}
