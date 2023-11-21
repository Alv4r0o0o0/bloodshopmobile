import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaventasPageRoutingModule } from './tablaventas-routing.module';

import { TablaventasPage } from './tablaventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaventasPageRoutingModule
  ],
  declarations: [TablaventasPage]
})
export class TablaventasPageModule {}
