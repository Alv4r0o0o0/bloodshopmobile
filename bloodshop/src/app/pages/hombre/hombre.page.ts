import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  usuario: any;
  seccion: string = "hombre";

  constructor(private navCtrl: NavController,private bdService: BdserviceService) {}

  ngOnInit() {
    this.bdService.dbState().subscribe((res) => {
      if (res) {
        this.loadZapatillas();
      }
    });
  }

  formatPrice(price: number): string {
    return "$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  loadZapatillas() {
    this.bdService.fetchZapatillas().subscribe((zapatillas) => {
      // Filtrar zapatillas según la sección
      this.zapatillas = zapatillas.filter(z => z.seccion === this.seccion);
    });
  }
}