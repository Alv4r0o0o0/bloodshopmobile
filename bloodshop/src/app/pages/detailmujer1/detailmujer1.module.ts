import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { Detailmujer1PageRoutingModule } from './detailmujer1-routing.module';

import { Detailmujer1Page } from './detailmujer1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Detailmujer1PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Detailmujer1Page]
})
export class Detailmujer1PageModule {}
