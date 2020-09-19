import { Component, OnInit } from '@angular/core';
import { Goal } from '../../models/goal';
import { faArrowRight, faBullseye } from '@fortawesome/pro-light-svg-icons';
import { GoalStateService } from '../../services/goal-state.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
  goal: Goal;
  goalIcon = faBullseye;
  navigateIcon = faArrowRight;

  constructor(private goalState: GoalStateService) {}

  async ngOnInit() {
    this.goal = await this.goalState.getGoal();
  }
}
