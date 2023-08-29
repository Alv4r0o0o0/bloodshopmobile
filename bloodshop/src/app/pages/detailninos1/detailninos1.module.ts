import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailninos1PageRoutingModule } from './detailninos1-routing.module';

import { Detailninos1Page } from './detailninos1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailninos1PageRoutingModule
  ],
  declarations: [Detailninos1Page]
})
export class Detailninos1PageModule {}
