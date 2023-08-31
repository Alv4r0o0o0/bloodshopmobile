import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.page.html',
  styleUrls: ['./mujer.page.scss'],
})
export class MujerPage implements OnInit {
  myDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
