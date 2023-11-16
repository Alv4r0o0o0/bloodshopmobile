import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarperfilPageRoutingModule } from './editarperfil-routing.module';

import { EditarperfilPage } from './editarperfil.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditarperfilPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarperfilPage]
})
export class EditarperfilPageModule {}
