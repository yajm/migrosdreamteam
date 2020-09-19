import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchProductsController } from './searchproducts/searchproducts.controller';
// import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [],
  controllers: [AppController, SearchProductsController],
  providers: [AppService],
})
export class AppModule {}
