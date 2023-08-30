import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { Detailmujer4PageRoutingModule } from './detailmujer4-routing.module';

import { Detailmujer4Page } from './detailmujer4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Detailmujer4PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Detailmujer4Page]
})
export class Detailmujer4PageModule {}
