import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailhombre1Page } from './detailhombre1.page';

const routes: Routes = [
  {
    path: '',
    component: Detailhombre1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailhombre1PageRoutingModule {}
