import { Injectable } from '@angular/core';
import { ProductInfo } from '../models/product-info';
import { AssetApiService } from '../../api/services/asset-api.service';
import { Product } from '../../purchase/models/product';

@Injectable()
export class ProductStateService {
  private products: Promise<
    Product[]
  > = this.assetApi.getPurchaseArticles().then((purchases) => {
    return [].concat.apply(
      [],
      Object.keys(purchases)
        .map((purchaseId) => purchases[purchaseId])
        .slice(0, 100)
    );
  });
  constructor(private assetApi: AssetApiService) {}

  async getProducts(skip: number, take: number) {
    const data = await this.products;
    return data.slice(skip, skip + take);
  }

  async getInfo(id: string): Promise<ProductInfo> {
    return this.assetApi.getProductInfo(id);
  }
}
