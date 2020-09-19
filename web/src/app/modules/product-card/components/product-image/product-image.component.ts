import { Component, Input, OnInit } from '@angular/core';
import { ProductInfo } from '../../../product/models/product-info';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss'],
})
export class ProductImageComponent implements OnInit {
  @Input()
  productInfo: ProductInfo;

  @Input()
  loading: boolean;

  constructor() {}

  ngOnInit(): void {}
}
