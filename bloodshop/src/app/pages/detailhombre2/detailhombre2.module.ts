import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { Detailhombre2PageRoutingModule } from './detailhombre2-routing.module';

import { Detailhombre2Page } from './detailhombre2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Detailhombre2PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Detailhombre2Page]
})
export class Detailhombre2PageModule {}
