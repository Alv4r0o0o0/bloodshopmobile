import { Component } from '@angular/core';
import { BdserviceService } from './services/dbservice.service'; // Asegúrate de importar el servicio correcto

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  numProductosEnCarrito: number = 0;

  constructor(private bdService: BdserviceService) {
    // Suscribe a cambios en el carrito y actualiza numProductosEnCarrito
    this.bdService.carrito$.subscribe((productosEnCarrito) => {
      this.numProductosEnCarrito = productosEnCarrito.length;
    });
  }
}