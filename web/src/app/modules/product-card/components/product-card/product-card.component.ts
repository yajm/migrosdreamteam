import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../purchase/models/product';
import { Purchase } from '../../../purchase/models/purchase';
import { ProductStateService } from '../../../product/services/product-state.service';
import { ProductInfo } from '../../../product/models/product-info';
import { SwitchValue } from '../../../switcher/model/switch-value';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: ProductInfo;

  @Input()
  purchase: Purchase;

  @Input()
  scoreKey: SwitchValue = 'total';

  @Input()
  disableNavigation = false;

  url: string[];
  loading = true;

  get score(): number {
    return this.product[`${this.scoreKey}Score`] * 10;
  }

  verifyClick(e: Event): void {
    e.preventDefault();
  }

  ngOnInit(): void {
    if (this.purchase) {
      this.url = ['/purchase', this.purchase.einkaufID, this.product.id];
    } else {
      this.url = ['/product', this.product.id];
    }
  }
}
