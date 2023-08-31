import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradorPageRoutingModule } from './administrador-routing.module';

import { AdministradorPage } from './administrador.page';
import { HomePageRoutingModule } from 'src/app/home/home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministradorPageRoutingModule,
    HomePageRoutingModule,
    ComponentsModule,
    MatSliderModule,
    MatProgressBarModule
  ],
  declarations: [AdministradorPage]
})
export class AdministradorPageModule {}
