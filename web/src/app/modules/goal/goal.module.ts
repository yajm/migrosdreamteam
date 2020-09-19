import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalRoutingModule } from './goal-routing.module';
import { GoalComponent } from './components/goal/goal.component';
import { ApiModule } from '../api/api.module';
import { ScoreModule } from '../score/score.module';
import { PageModule } from '../page/page.module';
import { NavbarModule } from '../navbar/navbar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoalTipComponent } from './components/goal-tip/goal-tip.component';
import { GoalStateService } from './services/goal-state.service';
import { ProductCardModule } from '../product-card/product-card.module';
import { ScrollableListModule } from '../scrollable-list/scrollable-list.module';

@NgModule({
  declarations: [GoalComponent, GoalTipComponent],
  providers: [GoalStateService],
  imports: [
    CommonModule,
    ApiModule,
    GoalRoutingModule,
    ScoreModule,
    PageModule,
    NavbarModule,
    FontAwesomeModule,
    ProductCardModule,
    ScrollableListModule,
  ],
})
export class GoalModule {}
