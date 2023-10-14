import { Component, OnInit } from '@angular/core';
import { BdserviceService } from 'src/app/services/dbservice.service';  // Reemplaza 'ruta-de-tu-servicio' con la ubicación correcta

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.page.html',
  styleUrls: ['./hombre.page.scss'],
})
export class HombrePage implements OnInit {
  myDate = new Date();
  zapatillas: any[] = [];
  cart: any[] = [];

  constructor(private bdService: BdserviceService) {}

  ngOnInit() {
    this.bdService.dbState().subscribe((res) => {
      if (res) {
        this.loadZapatillas();
      }
    });
  }

  loadZapatillas() {
    this.bdService.fetchZapatillas().subscribe((zapatillas) => {
      this.zapatillas = zapatillas;
    });
  }
}