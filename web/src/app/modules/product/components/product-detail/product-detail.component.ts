import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInfo } from '../../models/product-info';
import { ProductStateService } from '../../services/product-state.service';
import { Product } from '../../../purchase/models/product';

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
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productState: ProductStateService
  ) {}

  ngOnInit(): void {
    this.purchaseId = this.route.snapshot.params.purchaseId;
    this.productId = this.route.snapshot.params.productId;
    if (this.purchaseId) {
      this.backUrl = ['/purchase', this.purchaseId];
    } else {
      this.backUrl = ['/product'];
    }
    this.productInfo = this.productState.getInfo(this.productId);
    this.products = this.productState.products;
  }
}
