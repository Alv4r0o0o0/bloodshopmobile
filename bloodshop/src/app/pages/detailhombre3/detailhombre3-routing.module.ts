import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailhombre3Page } from './detailhombre3.page';

const routes: Routes = [
  {
    path: '',
    component: Detailhombre3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailhombre3PageRoutingModule {}
