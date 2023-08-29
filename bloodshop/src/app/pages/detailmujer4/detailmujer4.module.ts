import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailmujer4PageRoutingModule } from './detailmujer4-routing.module';

import { Detailmujer4Page } from './detailmujer4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailmujer4PageRoutingModule
  ],
  declarations: [Detailmujer4Page]
})
export class Detailmujer4PageModule {}
