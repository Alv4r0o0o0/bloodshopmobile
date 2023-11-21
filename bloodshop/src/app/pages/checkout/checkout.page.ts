import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BdserviceService } from 'src/app/services/dbservice.service';
import { Zapatilla } from 'src/app/services/zapatilla';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  carrito: any[] = [];
  subtotal: number = 0;
  cantidadTotal: number = 0;
  direccion: string = ''; // Agrega esta línea para definir la propiedad 'direccion'
  costoEnvio: number = 3990;

  constructor(private route: ActivatedRoute, private bdService: BdserviceService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const state = this.route.snapshot.data['state'];
      if (state) {
        this.carrito = state.carrito;
        this.subtotal = state.subtotal;
        this.cantidadTotal = state.cantidadTotal;
      }
    });
  }

  realizarCompra() {
    // Verificar si hay productos en el carrito
    if (this.carrito.length === 0) {
      this.bdService.presentAlertP("No hay productos en el carrito.");
      return;
    }
    const idUsuario = this.bdService.obtenerUsuarioId();
    if (idUsuario === null) {
      this.bdService.presentAlertN("No se pudo obtener el ID del usuario.");
      return;
    }
    this.carrito.forEach(producto => {
      const { idProducto, cantidad, subtotal } = producto;
      this.bdService.agregarDetalle(null, idProducto, cantidad, subtotal, idUsuario)
        .then(() => {
          this.bdService.presentAlertP("Has comprado con exito!");
        })
        .catch(error => {
          console.error('Error al agregar detalle:', error);
        });
    });

    // Resto de la lógica para la compra (puede incluir la lógica para actualizar el estado de la venta, etc.)
  }
}