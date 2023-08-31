import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { HomePageRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../components/components.module';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    MatSliderModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
