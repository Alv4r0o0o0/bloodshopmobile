import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { Detailninos1PageRoutingModule } from './detailninos1-routing.module';

import { Detailninos1Page } from './detailninos1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Detailninos1PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Detailninos1Page]
})
export class Detailninos1PageModule {}
