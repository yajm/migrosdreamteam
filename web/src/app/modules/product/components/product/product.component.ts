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
  skip = 0;
  private loading = false;

  constructor(private productState: ProductStateService) {}

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.productState
      .getProducts(this.skip)
      .then((products) => {
        this.products.push(...products);
        this.skip++;
        this.loading = false;
      })
      .catch((err) => {
        console.error(err);
        this.loading = false;
      });
  }
}
