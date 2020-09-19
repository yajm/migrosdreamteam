import { Component, OnInit } from '@angular/core';
import { faAnalytics } from '@fortawesome/pro-light-svg-icons';
import { GoalStateService } from '../../services/goal-state.service';
import { Goal } from '../../models/goal';
import { ActivatedRoute } from '@angular/router';
import { ProductInfo } from '../../../product/models/product-info';

@Component({
  selector: 'app-goal-tip',
  templateUrl: './goal-tip.component.html',
  styleUrls: ['./goal-tip.component.scss'],
})
export class GoalTipComponent implements OnInit {
  tipIcon = faAnalytics;
  goal: Goal;
  best: ProductInfo[];
  worst: ProductInfo[];
  scoreKey: string;
  selected: 'best' | 'worst';
  activeProducts: ProductInfo[];

  constructor(
    private goalState: GoalStateService,
    private route: ActivatedRoute
  ) {}

  select(value: 'best' | 'worst') {
    this.selected = value;
    this.activeProducts = this[value];
  }

  async ngOnInit() {
    this.scoreKey = this.route.snapshot.params.score;
    this.goal = await this.goalState.getGoal();
    this.best = this.goal[`${this.scoreKey}ScoreBest`];
    this.worst = this.goal[`${this.scoreKey}ScoreWorst`].reverse();
    this.select('best');
  }
}
