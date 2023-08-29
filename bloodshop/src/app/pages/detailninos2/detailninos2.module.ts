import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailninos2PageRoutingModule } from './detailninos2-routing.module';

import { Detailninos2Page } from './detailninos2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailninos2PageRoutingModule
  ],
  declarations: [Detailninos2Page]
})
export class Detailninos2PageModule {}
