import { Component, OnInit } from '@angular/core';
import { faAnalytics } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-goal-tip',
  templateUrl: './goal-tip.component.html',
  styleUrls: ['./goal-tip.component.scss'],
})
export class GoalTipComponent implements OnInit {
  tipIcon = faAnalytics;
  constructor() {}

  ngOnInit(): void {}
}
