import { Component, OnInit } from '@angular/core';
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

  constructor(public bdService: BdserviceService) {}

  eliminarZapatilla(zapatilla: any, index: number) {
    this.carritoVacio = this.zapatillasEnCarrito.length === 0;
    // Eliminar la zapatilla del carrito
    this.bdService.eliminarDelCarrito(zapatilla, index);
    // Actualizar la lista de zapatillas en el carrito
    this.bdService.presentAlertP("Se ha eliminado la zapatilla correctamente");
    this.zapatillasEnCarrito = this.bdService.obtenerCarrito();
  }
  ngOnInit() {
    this.zapatillasEnCarrito = this.bdService.obtenerCarrito();
    this.carritoVacio = this.zapatillasEnCarrito.length === 0;
    
  }

  realizarCompra() {
  }
}