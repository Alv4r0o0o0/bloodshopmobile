import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailninos4PageRoutingModule } from './detailninos4-routing.module';

import { Detailninos4Page } from './detailninos4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailninos4PageRoutingModule
  ],
  declarations: [Detailninos4Page]
})
export class Detailninos4PageModule {}
