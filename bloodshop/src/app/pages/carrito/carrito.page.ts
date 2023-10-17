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

  constructor(private bdService: BdserviceService) {
    this.zapatillasEnCarrito = bdService.obtenerCarrito();

  }
  eliminarZapatilla(zapatilla: any) {
    // Eliminar la zapatilla del carrito
    this.bdService.eliminarDelCarrito(zapatilla);
    // Actualizar la lista de zapatillas en el carrito
    this.zapatillasEnCarrito = this.bdService.obtenerCarrito();
  }
  ngOnInit() {
  }

  realizarCompra() {
  }
}