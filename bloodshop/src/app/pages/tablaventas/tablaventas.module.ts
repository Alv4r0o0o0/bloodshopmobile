import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaventasPageRoutingModule } from './tablaventas-routing.module';

import { TablaventasPage } from './tablaventas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaventasPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TablaventasPage]
})
export class TablaventasPageModule {}
