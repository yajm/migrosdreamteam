import { Test, TestingModule } from '@nestjs/testing';
import { SearchProductsController } from './searchproducts.controller';

describe('SearchproductsController', () => {
  let controller: SearchProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchProductsController],
    }).compile();

    controller = module.get<SearchProductsController>(SearchProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
