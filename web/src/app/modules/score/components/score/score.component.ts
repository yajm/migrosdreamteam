import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input()
  value: number | null;

  @HostBinding('class')
  get bgColor() {
    if (this.value === null || this.value === undefined) {
      return 'bg-gray-600';
    }
    if (this.value < 0.3) {
      return 'bg-red-600';
    } else if (this.value < 0.7) {
      return 'bg-yellow-600';
    } else {
      return 'bg-green-600';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
