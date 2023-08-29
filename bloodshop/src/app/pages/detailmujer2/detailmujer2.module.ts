import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailmujer2PageRoutingModule } from './detailmujer2-routing.module';

import { Detailmujer2Page } from './detailmujer2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailmujer2PageRoutingModule
  ],
  declarations: [Detailmujer2Page]
})
export class Detailmujer2PageModule {}
