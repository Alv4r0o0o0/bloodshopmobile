import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BdserviceService } from 'src/app/services/dbservice.service'; 

@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.page.html',
  styleUrls: ['./mujer.page.scss'],
})
export class MujerPage implements OnInit {
  myDate = new Date();
  zapatillas: any[] = [];
  cart: any[] = [];
  usuario: any;
  seccionFiltro: string = "mujer";

  constructor(private navCtrl: NavController,private bdService: BdserviceService) { }

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
      this.zapatillas = zapatillas.filter(z => z.seccion === this.seccionFiltro);
    });
  }

}
