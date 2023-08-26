import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailhombre1PageRoutingModule } from './detailhombre1-routing.module';

import { Detailhombre1Page } from './detailhombre1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailhombre1PageRoutingModule
  ],
  declarations: [Detailhombre1Page]
})
export class Detailhombre1PageModule {}
