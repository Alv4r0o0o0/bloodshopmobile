import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailmujer1',
  templateUrl: './detailmujer1.page.html',
  styleUrls: ['./detailmujer1.page.scss'],
})
export class Detailmujer1Page implements OnInit {

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
