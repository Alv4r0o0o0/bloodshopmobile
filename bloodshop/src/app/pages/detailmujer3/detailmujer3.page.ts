import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailmujer3',
  templateUrl: './detailmujer3.page.html',
  styleUrls: ['./detailmujer3.page.scss'],
})
export class Detailmujer3Page implements OnInit {

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
