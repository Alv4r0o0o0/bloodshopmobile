import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarzapatillaPage } from './agregarzapatilla.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarzapatillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarzapatillaPageRoutingModule {}
