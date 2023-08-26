import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailhombre3PageRoutingModule } from './detailhombre3-routing.module';

import { Detailhombre3Page } from './detailhombre3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailhombre3PageRoutingModule
  ],
  declarations: [Detailhombre3Page]
})
export class Detailhombre3PageModule {}
