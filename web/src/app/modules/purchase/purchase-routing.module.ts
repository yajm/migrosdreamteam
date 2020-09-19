import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PurchaseDetailComponent } from './components/purchase-detail/purchase-detail.component';
import { ProductDetailComponent } from '../product/components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseComponent,
  },
  {
    path: ':purchaseId',
    component: PurchaseDetailComponent,
  },
  {
    path: ':purchaseId/:productId',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseRoutingModule {}
