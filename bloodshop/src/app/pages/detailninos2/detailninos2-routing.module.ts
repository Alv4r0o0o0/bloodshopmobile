import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailninos2Page } from './detailninos2.page';

const routes: Routes = [
  {
    path: '',
    component: Detailninos2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailninos2PageRoutingModule {}
