import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/marketplace/marketplace.module').then( m => m.MarketplacePageModule)
  },
  {
    path: 'stash',
    loadChildren: () => import('./screens/stash/stash.module').then( m => m.StashPageModule)
  },
  {
    path: 'transaction-history',
    loadChildren: () => import('./screens/transaction-history/transaction-history.module').then( m => m.TransactionHistoryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
