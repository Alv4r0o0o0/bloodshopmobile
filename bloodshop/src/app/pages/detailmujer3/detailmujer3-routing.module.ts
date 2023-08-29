import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailmujer3Page } from './detailmujer3.page';

const routes: Routes = [
  {
    path: '',
    component: Detailmujer3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailmujer3PageRoutingModule {}
