import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminninosPageRoutingModule } from './adminninos-routing.module';

import { AdminninosPage } from './adminninos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminninosPageRoutingModule
  ],
  declarations: [AdminninosPage]
})
export class AdminninosPageModule {}
