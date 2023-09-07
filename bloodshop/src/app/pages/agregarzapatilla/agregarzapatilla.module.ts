import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarzapatillaPageRoutingModule } from './agregarzapatilla-routing.module';

import { AgregarzapatillaPage } from './agregarzapatilla.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarzapatillaPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    MatSliderModule,
  ],
  declarations: [AgregarzapatillaPage]
})
export class AgregarzapatillaPageModule {}
