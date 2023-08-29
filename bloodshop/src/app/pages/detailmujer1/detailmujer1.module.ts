import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailmujer1PageRoutingModule } from './detailmujer1-routing.module';

import { Detailmujer1Page } from './detailmujer1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailmujer1PageRoutingModule
  ],
  declarations: [Detailmujer1Page]
})
export class Detailmujer1PageModule {}
