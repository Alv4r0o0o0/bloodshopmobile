import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminmujerPageRoutingModule } from './adminmujer-routing.module';

import { AdminmujerPage } from './adminmujer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminmujerPageRoutingModule
  ],
  declarations: [AdminmujerPage]
})
export class AdminmujerPageModule {}
