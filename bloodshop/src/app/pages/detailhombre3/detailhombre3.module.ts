import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { Detailhombre3PageRoutingModule } from './detailhombre3-routing.module';

import { Detailhombre3Page } from './detailhombre3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Detailhombre3PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Detailhombre3Page]
})
export class Detailhombre3PageModule {}
