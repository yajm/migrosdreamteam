import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../purchase/models/product';
import { Purchase } from '../../../purchase/models/purchase';
import { ProductStateService } from '../../../product/services/product-state.service';
import { ProductInfo } from '../../../product/models/product-info';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: Product;

  @Input()
  purchase: Purchase;

  @Input()
  disableNavigation = false;

  url: string[];
  loading = true;
  productInfo: ProductInfo;

  constructor(private productState: ProductStateService) {}

  verifyClick(e: Event): void {
    e.preventDefault();
  }

  ngOnInit(): void {
    this.productState
      .getInfo(this.product.artikelID.toString())
      .then((info) => {
        this.productInfo = info;
        this.loading = false;
      });
    if (this.purchase) {
      this.url = [
        '/purchase',
        this.purchase.einkaufID,
        this.product.artikelID.toString(),
      ];
    } else {
      this.url = ['/product', this.product.artikelID.toString()];
    }
  }
}
