import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminhombrePage } from './adminhombre.page';

const routes: Routes = [
  {
    path: '',
    component: AdminhombrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminhombrePageRoutingModule {}
