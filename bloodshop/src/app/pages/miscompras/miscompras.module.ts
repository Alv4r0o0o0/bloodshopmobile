import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscomprasPageRoutingModule } from './miscompras-routing.module';

import { MiscomprasPage } from './miscompras.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscomprasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MiscomprasPage]
})
export class MiscomprasPageModule {}
