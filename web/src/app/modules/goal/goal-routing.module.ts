import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './components/goal/goal.component';
import { GoalTipComponent } from './components/goal-tip/goal-tip.component';

const routes: Routes = [
  {
    path: '',
    component: GoalComponent,
  },
  {
    path: ':scale',
    component: GoalTipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalRoutingModule {}
