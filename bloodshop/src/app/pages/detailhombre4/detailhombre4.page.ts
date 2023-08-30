import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailhombre4',
  templateUrl: './detailhombre4.page.html',
  styleUrls: ['./detailhombre4.page.scss'],
})
export class Detailhombre4Page implements OnInit {

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
