import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './components/search-input/search-input.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [SearchInputComponent],
  exports: [
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
})
export class SearchInputModule { }
