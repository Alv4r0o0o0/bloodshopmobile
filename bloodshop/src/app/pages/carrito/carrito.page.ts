import { Component, OnInit } from '@angular/core';
import { BdserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-carrito',
  templateUrl: 'carrito.page.html',
  styleUrls: ['carrito.page.scss']
})
export class CarritoPage {
  carrito: any[] = [];

  constructor(private bdService: BdserviceService) {
    // Recupera el carrito desde el servicio (puedes implementar esto)
    this.carrito = bdService.carrito;
  }
  ngOnInit() {
  }

  realizarCompra() {
    // Implementa la lógica para finalizar la compra aquí
    // Puedes procesar el pedido y realizar otras acciones necesarias
    // Una vez que la compra se haya realizado con éxito, puedes limpiar el carrito
    this.bdService.carrito = []; // Por ejemplo, si usas una propiedad para almacenar el carrito en el servicio
    // También puedes redirigir al usuario a una página de confirmación o agradecimiento.
  }
}