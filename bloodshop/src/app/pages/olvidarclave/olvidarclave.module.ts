import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidarclavePageRoutingModule } from './olvidarclave-routing.module';

import { OlvidarclavePage } from './olvidarclave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidarclavePageRoutingModule
  ],
  declarations: [OlvidarclavePage]
})
export class OlvidarclavePageModule {}
