import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseCardComponent } from './components/purchase-card/purchase-card.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PurchaseCardComponent],
  exports: [
    PurchaseCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class PurchaseCardModule { }
