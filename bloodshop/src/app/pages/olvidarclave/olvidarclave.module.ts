import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    OlvidarclavePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OlvidarclavePage]
})
export class OlvidarclavePageModule {}
