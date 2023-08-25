import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NinosPage } from './ninos.page';

const routes: Routes = [
  {
    path: '',
    component: NinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NinosPageRoutingModule {}
