import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailninos4Page } from './detailninos4.page';

const routes: Routes = [
  {
    path: '',
    component: Detailninos4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailninos4PageRoutingModule {}
