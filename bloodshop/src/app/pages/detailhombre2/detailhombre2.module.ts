import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailhombre2PageRoutingModule } from './detailhombre2-routing.module';

import { Detailhombre2Page } from './detailhombre2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailhombre2PageRoutingModule
  ],
  declarations: [Detailhombre2Page]
})
export class Detailhombre2PageModule {}
