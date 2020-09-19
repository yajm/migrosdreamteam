import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {ScoreModule} from '../score/score.module';



@NgModule({
  declarations: [ProductCardComponent],
  exports: [
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    ScoreModule,
  ],
})
export class ProductCardModule { }
