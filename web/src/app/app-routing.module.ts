import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'purchase',
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'purchase',
    loadChildren: () =>
      import('./modules/purchase/purchase.module').then(
        (m) => m.PurchaseModule
      ),
  },
  {
    path: 'goal',
    loadChildren: () =>
      import('./modules/goal/goal.module').then((m) => m.GoalModule),
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./modules/setting/setting.module').then((m) => m.SettingModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
