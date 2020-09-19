import { Component, Input, OnInit } from '@angular/core';
import { Purchase } from '../../../purchase/models/purchase';

@Component({
  selector: 'app-purchase-card',
  templateUrl: './purchase-card.component.html',
  styleUrls: ['./purchase-card.component.scss'],
})
export class PurchaseCardComponent implements OnInit {
  @Input()
  purchase: Purchase;

  constructor() {}

  ngOnInit(): void {}
}
