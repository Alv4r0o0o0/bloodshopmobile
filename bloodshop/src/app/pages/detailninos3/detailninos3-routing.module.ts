import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailninos3Page } from './detailninos3.page';

const routes: Routes = [
  {
    path: '',
    component: Detailninos3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailninos3PageRoutingModule {}
