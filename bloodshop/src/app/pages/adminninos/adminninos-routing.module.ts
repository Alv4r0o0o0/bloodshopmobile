import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminninosPage } from './adminninos.page';

const routes: Routes = [
  {
    path: '',
    component: AdminninosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminninosPageRoutingModule {}
