import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { Detailmujer3PageRoutingModule } from './detailmujer3-routing.module';

import { Detailmujer3Page } from './detailmujer3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Detailmujer3PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Detailmujer3Page]
})
export class Detailmujer3PageModule {}
