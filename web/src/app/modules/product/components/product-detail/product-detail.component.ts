import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  backUrl: string[];
  purchaseId: string;
  productId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.purchaseId = this.route.snapshot.params.purchaseId;
    this.productId = this.route.snapshot.params.productId;
    if (this.purchaseId) {
      this.backUrl = ['/purchase', this.purchaseId];
    } else {
      this.backUrl = ['/product'];
    }
  }
}
