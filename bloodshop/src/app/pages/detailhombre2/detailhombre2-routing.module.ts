import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailhombre2Page } from './detailhombre2.page';

const routes: Routes = [
  {
    path: '',
    component: Detailhombre2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailhombre2PageRoutingModule {}
