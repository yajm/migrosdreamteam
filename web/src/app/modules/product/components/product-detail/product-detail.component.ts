import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInfo } from '../../models/product-info';
import { ProductStateService } from '../../services/product-state.service';
import { Product } from '../../../purchase/models/product';
import { SwitchValue } from '../../../switcher/model/switch-value';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  backUrl: string[];
  purchaseId: string;
  productId: string;
  productInfo: ProductInfo;
  products: ProductInfo[] = [];
  sortedProducts: { [key: string]: ProductInfo[] } = {};
  loading = true;
  productsLoading = true;
  sort: SwitchValue = 'total';

  constructor(
    private route: ActivatedRoute,
    private productState: ProductStateService
  ) {}

  async ngOnInit() {
    this.purchaseId = this.route.snapshot.params.purchaseId;
    this.productId = this.route.snapshot.params.productId;
    if (this.purchaseId) {
      this.backUrl = ['/purchase', this.purchaseId];
    } else {
      this.backUrl = ['/product'];
    }
    this.productInfo = await this.productState.getInfo(this.productId);
    this.loading = false;
    this.products = await this.productState.getSimilarProducts(
      this.productInfo.categoryCode
    );
    for (const key of ['price', 'total', 'kcal', 'c02']) {
      this.sortedProducts[key] = this.sortByScore(key);
    }
    this.productsLoading = false;
  }

  private sortByScore(score: string) {
    return [...this.products].sort((a, b) => {
      return b[`${score}Score`] - a[`${score}Score`];
    });
  }
}
