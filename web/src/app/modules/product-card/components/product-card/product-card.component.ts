import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../purchase/models/product';
import { Purchase } from '../../../purchase/models/purchase';

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

  url: string[];

  constructor() {}

  ngOnInit(): void {
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
