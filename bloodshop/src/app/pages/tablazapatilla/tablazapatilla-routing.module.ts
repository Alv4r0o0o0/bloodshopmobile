import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablazapatillaPage } from './tablazapatilla.page';

const routes: Routes = [
  {
    path: '',
    component: TablazapatillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablazapatillaPageRoutingModule {}
