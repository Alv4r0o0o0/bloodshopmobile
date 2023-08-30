import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailhombre2',
  templateUrl: './detailhombre2.page.html',
  styleUrls: ['./detailhombre2.page.scss'],
})
export class Detailhombre2Page implements OnInit {

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
