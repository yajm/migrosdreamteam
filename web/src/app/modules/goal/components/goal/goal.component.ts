import { Component, OnInit } from '@angular/core';
import { AssetApiService } from '../../../api/services/asset-api.service';
import { Goal } from '../../models/goal';
import { faBullseye } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
  goal: Goal;
  goalIcon = faBullseye;

  constructor(private assetApi: AssetApiService) {}

  async ngOnInit() {
    this.goal = await this.assetApi.getGoal();
  }
}
