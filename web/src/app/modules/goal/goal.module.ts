import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalRoutingModule } from './goal-routing.module';
import { GoalComponent } from './components/goal/goal.component';


@NgModule({
  declarations: [GoalComponent],
  imports: [
    CommonModule,
    GoalRoutingModule
  ]
})
export class GoalModule { }
