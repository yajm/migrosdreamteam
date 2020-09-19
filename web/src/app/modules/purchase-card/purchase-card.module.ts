import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseCardComponent } from './components/purchase-card/purchase-card.component';
import { RouterModule } from '@angular/router';
import { ScoreModule } from '../score/score.module';

@NgModule({
  declarations: [PurchaseCardComponent],
  exports: [PurchaseCardComponent],
  imports: [CommonModule, RouterModule, ScoreModule],
})
export class PurchaseCardModule {}
