import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { OlvidarclavePageRoutingModule } from './olvidarclave-routing.module';

import { OlvidarclavePage } from './olvidarclave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    OlvidarclavePageRoutingModule
  ],
  declarations: [OlvidarclavePage]
})
export class OlvidarclavePageModule {}
