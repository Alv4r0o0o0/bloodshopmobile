import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarzapatillaPageRoutingModule } from './editarzapatilla-routing.module';

import { EditarzapatillaPage } from './editarzapatilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarzapatillaPageRoutingModule
  ],
  declarations: [EditarzapatillaPage]
})
export class EditarzapatillaPageModule {}
