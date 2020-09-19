import { Component, OnInit } from '@angular/core';
import { faSpinner, faSpinnerThird } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  spinnerIcon = faSpinnerThird;
  constructor() {}

  ngOnInit(): void {}
}
