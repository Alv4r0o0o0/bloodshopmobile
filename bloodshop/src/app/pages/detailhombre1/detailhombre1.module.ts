import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { Detailhombre1PageRoutingModule } from './detailhombre1-routing.module';

import { Detailhombre1Page } from './detailhombre1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Detailhombre1PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Detailhombre1Page]
})
export class Detailhombre1PageModule {}
