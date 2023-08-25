import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MujerPageRoutingModule } from './mujer-routing.module';

import { MujerPage } from './mujer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MujerPageRoutingModule
  ],
  declarations: [MujerPage]
})
export class MujerPageModule {}
