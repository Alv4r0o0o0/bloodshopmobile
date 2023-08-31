import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminhombrePageRoutingModule } from './adminhombre-routing.module';

import { AdminhombrePage } from './adminhombre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminhombrePageRoutingModule
  ],
  declarations: [AdminhombrePage]
})
export class AdminhombrePageModule {}
