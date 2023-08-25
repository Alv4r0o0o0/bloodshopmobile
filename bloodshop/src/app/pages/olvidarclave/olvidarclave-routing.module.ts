import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidarclavePage } from './olvidarclave.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidarclavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidarclavePageRoutingModule {}
