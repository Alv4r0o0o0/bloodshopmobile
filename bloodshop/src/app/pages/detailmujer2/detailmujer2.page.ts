import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailmujer2',
  templateUrl: './detailmujer2.page.html',
  styleUrls: ['./detailmujer2.page.scss'],
})
export class Detailmujer2Page implements OnInit {

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
