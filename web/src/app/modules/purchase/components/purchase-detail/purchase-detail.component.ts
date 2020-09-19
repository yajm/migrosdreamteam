import { Component, OnInit } from '@angular/core';
import { PurchaseStateService } from '../../services/purchase-state.service';
import { ActivatedRoute } from '@angular/router';
import { Purchase } from '../../models/purchase';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.scss'],
})
export class PurchaseDetailComponent implements OnInit {
  products = this.purchaseState.products;
  purchase: Purchase;

  constructor(
    private purchaseState: PurchaseStateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.purchase = this.purchaseState.getPurchase(
      this.route.snapshot.params.purchaseId
    );
  }
}
