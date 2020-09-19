import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { NavbarModule } from '../navbar/navbar.module';
import { PageModule } from '../page/page.module';
import { ScrollableListModule } from '../scrollable-list/scrollable-list.module';
import { ProductCardModule } from '../product-card/product-card.module';
import { SearchInputModule } from '../search-input/search-input.module';
import { PurchaseCardModule } from '../purchase-card/purchase-card.module';
import { ApiModule } from '../api/api.module';
import { PurchaseStateService } from './services/purchase-state.service';
import { PurchaseDetailComponent } from './components/purchase-detail/purchase-detail.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [PurchaseComponent, PurchaseDetailComponent],
  providers: [PurchaseStateService],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    ProductModule,
    NavbarModule,
    ApiModule,
    PageModule,
    ScrollableListModule,
    ProductCardModule,
    SearchInputModule,
    PurchaseCardModule,
  ],
})
export class PurchaseModule {}
