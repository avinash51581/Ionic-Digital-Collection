import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaharashtrianFestivalsListPage } from './maharashtrian-festivals-list.page';

const routes: Routes = [
  {
    path: '',
    component: MaharashtrianFestivalsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaharashtrianFestivalsPageRoutingModule {}
