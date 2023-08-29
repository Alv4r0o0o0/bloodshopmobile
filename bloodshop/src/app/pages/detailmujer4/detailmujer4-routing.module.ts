import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailmujer4Page } from './detailmujer4.page';

const routes: Routes = [
  {
    path: '',
    component: Detailmujer4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailmujer4PageRoutingModule {}
