import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BdserviceService } from 'src/app/services/dbservice.service';
import { Zapatilla } from 'src/app/services/zapatilla';

@Component({
  selector: 'app-carrito',
  templateUrl: 'carrito.page.html',
  styleUrls: ['carrito.page.scss']
})
export class CarritoPage {
  zapatillasEnCarrito: Zapatilla[] = [];
  carritoVacio: boolean = true;
  comprasRealizadas: any[] = [];

  constructor(public bdService: BdserviceService, private navCtrl: NavController, private router: Router) { }

  eliminarZapatilla(zapatilla: any, index: number) {
    this.carritoVacio = this.zapatillasEnCarrito.length === 0;
    this.bdService.eliminarDelCarrito(zapatilla, index);
    this.bdService.presentAlertP("Se ha eliminado la zapatilla correctamente");
  }
  ngOnInit() {
    this.zapatillasEnCarrito = this.bdService.obtenerCarrito();
    this.carritoVacio = this.zapatillasEnCarrito.length === 0;

  }

  realizarCompra() {
    if (this.zapatillasEnCarrito.length === 0) {
      this.bdService.presentAlertP("No hay productos en el carrito.");
      return;
    }
    this.router.navigate(['/checkout']);
  }
}