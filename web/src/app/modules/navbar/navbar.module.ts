import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarTitleComponent } from './components/navbar-title/navbar-title.component';
import { NavbarBackComponent } from './components/navbar-back/navbar-back.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NavbarIconComponent } from './components/navbar-icon/navbar-icon.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarTitleComponent,
    NavbarBackComponent,
    NavbarIconComponent,
  ],
  exports: [
    NavbarComponent,
    NavbarTitleComponent,
    NavbarBackComponent,
    NavbarIconComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
})
export class NavbarModule {}
