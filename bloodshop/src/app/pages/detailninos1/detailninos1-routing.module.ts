import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailninos1Page } from './detailninos1.page';

const routes: Routes = [
  {
    path: '',
    component: Detailninos1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailninos1PageRoutingModule {}
