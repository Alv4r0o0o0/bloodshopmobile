import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detailhombre1',
  templateUrl: './detailhombre1.page.html',
  styleUrls: ['./detailhombre1.page.scss'],
})
export class Detailhombre1Page implements OnInit {
  
  myDate = new Date();
  
  
  
  elegirForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) { 
    this.elegirForm = this.formBuilder.group({
      select: ['', [Validators.required]],
      select1: ['', [Validators.required]],
    });
    
  }
  
  irASeccion1() {
    this.navCtrl.navigateForward('/home');
  }

  irASeccion2() {
    this.navCtrl.navigateForward('/seccion2');
  }

  irASeccion3() {
    this.navCtrl.navigateForward('/seccion3');
  }


  ngOnInit() {
  }

}
