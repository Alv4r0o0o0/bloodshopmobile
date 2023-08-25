import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NinosPageRoutingModule } from './ninos-routing.module';

import { NinosPage } from './ninos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NinosPageRoutingModule
  ],
  declarations: [NinosPage]
})
export class NinosPageModule {}
