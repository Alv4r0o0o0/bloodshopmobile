import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent,
  RouterLink,],
  imports: [
    CommonModule,
    RouterLink,
    IonicModule
  ]
})
export class ComponentsModule { }
