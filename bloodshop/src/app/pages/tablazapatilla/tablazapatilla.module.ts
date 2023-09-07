import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablazapatillaPageRoutingModule } from './tablazapatilla-routing.module';

import { TablazapatillaPage } from './tablazapatilla.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablazapatillaPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    MatSliderModule,
  ],
  declarations: [TablazapatillaPage]
})
export class TablazapatillaPageModule {}
