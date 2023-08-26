import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailhombre4Page } from './detailhombre4.page';

const routes: Routes = [
  {
    path: '',
    component: Detailhombre4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailhombre4PageRoutingModule {}
