import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-navbar-icon',
  templateUrl: './navbar-icon.component.html',
  styleUrls: ['./navbar-icon.component.scss'],
})
export class NavbarIconComponent implements OnInit {
  @Input()
  icon: IconDefinition;

  constructor() {}

  ngOnInit(): void {}
}
