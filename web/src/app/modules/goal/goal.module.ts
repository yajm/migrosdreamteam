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

@NgModule({
  declarations: [GoalComponent, GoalTipComponent],
  imports: [
    CommonModule,
    ApiModule,
    GoalRoutingModule,
    ScoreModule,
    PageModule,
    NavbarModule,
    FontAwesomeModule,
  ],
})
export class GoalModule {}
