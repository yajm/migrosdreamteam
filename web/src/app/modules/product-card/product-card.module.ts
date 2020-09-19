import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ScoreModule } from '../score/score.module';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { ProductImageComponent } from './components/product-image/product-image.component';

@NgModule({
  declarations: [ProductCardComponent, ProductImageComponent],
  exports: [ProductCardComponent, ProductImageComponent],
  imports: [CommonModule, ScoreModule, RouterModule, LoaderModule],
})
export class ProductCardModule {}
