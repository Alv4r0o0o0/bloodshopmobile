import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailninos1',
  templateUrl: './detailninos1.page.html',
  styleUrls: ['./detailninos1.page.scss'],
})
export class Detailninos1Page implements OnInit {

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
