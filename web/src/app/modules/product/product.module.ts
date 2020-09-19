import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import {NavbarModule} from '../navbar/navbar.module';
import {PageModule} from '../page/page.module';
import {SearchInputModule} from '../search-input/search-input.module';
import {ScrollableListModule} from '../scrollable-list/scrollable-list.module';
import {ProductCardModule} from '../product-card/product-card.module';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NavbarModule,
    PageModule,
    SearchInputModule,
    ScrollableListModule,
    ProductCardModule,
  ],
})
export class ProductModule { }
