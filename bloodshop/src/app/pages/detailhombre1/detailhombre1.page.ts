import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailhombre1',
  templateUrl: './detailhombre1.page.html',
  styleUrls: ['./detailhombre1.page.scss'],
})
export class Detailhombre1Page implements OnInit {
  
  myDate = new Date();
  
  
  
  elegirForm : FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.elegirForm = this.formBuilder.group({
      select: ['', [Validators.required]],
      select1: ['', [Validators.required]],
    });
  }



  ngOnInit() {
  }

}
