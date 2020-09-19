import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherComponent } from './components/switcher/switcher.component';

@NgModule({
  declarations: [SwitcherComponent],
  exports: [SwitcherComponent],
  imports: [CommonModule],
})
export class SwitcherModule {}
