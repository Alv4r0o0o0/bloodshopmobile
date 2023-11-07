import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editarperfil1PageRoutingModule } from './editarperfil1-routing.module';

import { Editarperfil1Page } from './editarperfil1.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    IonicModule,
    Editarperfil1PageRoutingModule
  ],
  declarations: [Editarperfil1Page]
})
export class Editarperfil1PageModule {}
