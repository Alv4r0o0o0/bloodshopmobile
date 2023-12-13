import { Component, OnInit } from '@angular/core';
import { BdserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-tablaventas',
  templateUrl: './tablaventas.page.html',
  styleUrls: ['./tablaventas.page.scss'],
})
export class TablaventasPage implements OnInit {
  detalles: any[] = [];

  constructor(private bd: BdserviceService) { }

  ngOnInit() {
    // Suscríbete al observable listaDetalle del servicio
    this.bd.listaDetalle.subscribe((detalles) => {
      this.detalles = detalles;
    });
  }

}
