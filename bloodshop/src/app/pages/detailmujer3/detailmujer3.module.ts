import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailmujer3PageRoutingModule } from './detailmujer3-routing.module';

import { Detailmujer3Page } from './detailmujer3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailmujer3PageRoutingModule
  ],
  declarations: [Detailmujer3Page]
})
export class Detailmujer3PageModule {}
