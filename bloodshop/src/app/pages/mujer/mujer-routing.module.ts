import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MujerPage } from './mujer.page';

const routes: Routes = [
  {
    path: '',
    component: MujerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MujerPageRoutingModule {}
