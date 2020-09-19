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
  products = [];

  constructor(private productState: ProductStateService) {}

  ngOnInit(): void {
    this.productState.getProducts(0, 50).then((products) => {
      this.products = products;
    });
  }
}
