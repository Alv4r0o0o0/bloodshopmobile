import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarshoesPage } from './editarshoes.page';

const routes: Routes = [
  {
    path: '',
    component: EditarshoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarshoesPageRoutingModule {}
