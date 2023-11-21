import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public bdService: BdserviceService, private router: Router) { }

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
    // Verificar si hay zapatillas en el carrito
    if (this.zapatillasEnCarrito.length === 0) {
      this.bdService.presentAlertP("No hay productos en el carrito.");
      return;
    }

    // Obtener la información necesaria del carrito
    const subtotal = this.zapatillasEnCarrito.reduce((total, zapatilla) => total + (zapatilla.precio * zapatilla.cantidad), 0);
    const cantidadTotal = this.zapatillasEnCarrito.reduce((total, zapatilla) => total + zapatilla.cantidad, 0);

    // Redirigir a la página de checkout y pasar los datos
    this.router.navigate(['/checkout'], {
      state: {
        carrito: this.zapatillasEnCarrito,
        subtotal,
        cantidadTotal,
      },
    });

  }
}