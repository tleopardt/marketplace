import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StashPage } from './stash.page';

const routes: Routes = [
  {
    path: '',
    component: StashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StashPageRoutingModule {}
