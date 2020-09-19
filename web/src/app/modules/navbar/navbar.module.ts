import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarTitleComponent } from './components/navbar-title/navbar-title.component';



@NgModule({
  declarations: [NavbarComponent, NavbarTitleComponent],
  exports: [NavbarComponent, NavbarTitleComponent],
  imports: [
    CommonModule
  ]
})
export class NavbarModule { }
