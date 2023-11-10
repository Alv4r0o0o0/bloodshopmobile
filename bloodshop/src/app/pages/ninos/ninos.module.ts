import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { NinosPageRoutingModule } from './ninos-routing.module';

import { NinosPage } from './ninos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    NinosPageRoutingModule
  ],
  declarations: [NinosPage]
})
export class NinosPageModule {}
