import { Injectable } from '@angular/core';
import { AssetApiService } from '../../api/services/asset-api.service';
import { Goal } from '../models/goal';

@Injectable()
export class GoalStateService {
  private goal = this.assetApi.getGoal();
  constructor(private assetApi: AssetApiService) {}

  async getGoal(): Promise<Goal> {
    return await this.goal;
  }
}
