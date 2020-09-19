import { Component, OnInit } from '@angular/core';
import { PurchaseStateService } from '../../services/purchase-state.service';
import { Purchase } from '../../models/purchase';
import { faShoppingCart } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
  items: Purchase[] = [];
  headerIcon = faShoppingCart;

  constructor(private purchaseState: PurchaseStateService) {}

  async ngOnInit() {
    this.items = await this.purchaseState.getPurchases();
  }
}
