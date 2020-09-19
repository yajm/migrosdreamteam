import { Component, OnInit } from '@angular/core';
import { PurchaseStateService } from '../../services/purchase-state.service';
import { ActivatedRoute } from '@angular/router';
import { Purchase } from '../../models/purchase';
import { Product } from '../../models/product';
import { ProductInfo } from '../../../product/models/product-info';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.scss'],
})
export class PurchaseDetailComponent implements OnInit {
  products: ProductInfo[];
  purchase: Purchase;

  constructor(
    private purchaseState: PurchaseStateService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const purchaseId = this.route.snapshot.params.purchaseId;
    this.products = await this.purchaseState.getArticles(purchaseId);
    this.purchase = await this.purchaseState.getPurchase(purchaseId);
  }
}
