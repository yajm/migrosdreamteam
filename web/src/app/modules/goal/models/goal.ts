import { ProductInfo } from '../../product/models/product-info';

export interface Goal {
  co2Score: number;
  kcalScore: number;
  priceScore: number;

  co2ScoreBest: ProductInfo[];
  co2ScoreWorst: ProductInfo[];

  priceBest: ProductInfo[];
  priceWorst: ProductInfo[];

  kcalBest: ProductInfo[];
  kcalWorst: ProductInfo[];
}
