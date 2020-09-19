import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './components/score/score.component';



@NgModule({
  declarations: [ScoreComponent],
  exports: [
    ScoreComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ScoreModule { }
