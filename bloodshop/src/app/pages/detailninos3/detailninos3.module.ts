import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailninos3PageRoutingModule } from './detailninos3-routing.module';

import { Detailninos3Page } from './detailninos3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailninos3PageRoutingModule
  ],
  declarations: [Detailninos3Page]
})
export class Detailninos3PageModule {}
