import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editarperfil1Page } from './editarperfil1.page';

const routes: Routes = [
  {
    path: '',
    component: Editarperfil1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editarperfil1PageRoutingModule {}
