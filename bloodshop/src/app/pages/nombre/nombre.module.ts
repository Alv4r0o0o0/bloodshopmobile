import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { NombrePageRoutingModule } from './nombre-routing.module';

import { NombrePage } from './nombre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NombrePageRoutingModule
  ],
  declarations: [NombrePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NombrePageModule {}
