import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarzapatillaPage } from './editarzapatilla.page';

const routes: Routes = [
  {
    path: '',
    component: EditarzapatillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarzapatillaPageRoutingModule {}
