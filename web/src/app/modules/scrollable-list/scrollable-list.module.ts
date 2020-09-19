import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollableListComponent } from './components/scrollable-list/scrollable-list.component';



@NgModule({
  declarations: [ScrollableListComponent],
  exports: [
    ScrollableListComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ScrollableListModule { }
