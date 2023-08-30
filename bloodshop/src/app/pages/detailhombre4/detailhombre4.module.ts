import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { Detailhombre4PageRoutingModule } from './detailhombre4-routing.module';

import { Detailhombre4Page } from './detailhombre4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Detailhombre4PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [Detailhombre4Page]
})
export class Detailhombre4PageModule {}
