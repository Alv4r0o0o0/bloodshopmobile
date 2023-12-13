import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.page.html',
  styleUrls: ['./tiendas.page.scss'],
})
export class TiendasPage implements OnInit {
  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef!: ElementRef;
  constructor() {
    
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.showMap();
  }
  showMap(){
    const location = new google.maps.LatLng(-17.824858, 31.053028);
    const optiones = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, optiones)
  }



}
