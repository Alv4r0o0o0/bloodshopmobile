import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { Detailninos4PageRoutingModule } from './detailninos4-routing.module';

import { Detailninos4Page } from './detailninos4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Detailninos4PageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [Detailninos4Page]
})
export class Detailninos4PageModule {}
