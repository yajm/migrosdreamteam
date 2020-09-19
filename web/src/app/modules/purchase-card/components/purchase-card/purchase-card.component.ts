import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-purchase-card',
  templateUrl: './purchase-card.component.html',
  styleUrls: ['./purchase-card.component.scss']
})
export class PurchaseCardComponent implements OnInit {

  @Input()
  purchase: any;

  constructor() { }

  ngOnInit(): void {
  }

}
