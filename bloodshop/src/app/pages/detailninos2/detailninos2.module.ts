import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { Detailninos2PageRoutingModule } from './detailninos2-routing.module';

import { Detailninos2Page } from './detailninos2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Detailninos2PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Detailninos2Page]
})
export class Detailninos2PageModule {}
