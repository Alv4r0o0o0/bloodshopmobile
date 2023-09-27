import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarshoesPageRoutingModule } from './editarshoes-routing.module';

import { EditarshoesPage } from './editarshoes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarshoesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [EditarshoesPage]
})
export class EditarshoesPageModule {}
