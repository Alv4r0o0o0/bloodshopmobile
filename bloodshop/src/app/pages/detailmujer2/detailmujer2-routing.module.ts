import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailmujer2Page } from './detailmujer2.page';

const routes: Routes = [
  {
    path: '',
    component: Detailmujer2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailmujer2PageRoutingModule {}
