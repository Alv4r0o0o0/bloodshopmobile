import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailmujer1Page } from './detailmujer1.page';

const routes: Routes = [
  {
    path: '',
    component: Detailmujer1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailmujer1PageRoutingModule {}
