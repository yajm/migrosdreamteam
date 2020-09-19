import { Component, Input, OnInit } from '@angular/core';
import { faArrowLeft, faCaretLeft } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.scss'],
})
export class NavbarBackComponent implements OnInit {
  backIcon = faArrowLeft;

  @Input()
  url: string[] | string;

  constructor() {}

  ngOnInit(): void {}
}
