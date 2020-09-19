import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LoaderComponent],
})
export class LoaderModule {}
