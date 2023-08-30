import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { Detailninos3PageRoutingModule } from './detailninos3-routing.module';

import { Detailninos3Page } from './detailninos3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Detailninos3PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Detailninos3Page]
})
export class Detailninos3PageModule {}
