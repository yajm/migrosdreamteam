import { Component, OnInit } from '@angular/core';
import { faUtensils } from '@fortawesome/pro-light-svg-icons';
import { ProductStateService } from '../../services/product-state.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productIcon = faUtensils;
  products = this.productState.products;

  constructor(private productState: ProductStateService) {}

  ngOnInit(): void {}
}
