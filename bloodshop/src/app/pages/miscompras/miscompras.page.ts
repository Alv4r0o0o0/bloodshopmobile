import { Component, OnInit } from '@angular/core';
import { BdserviceService } from 'src/app/services/dbservice.service';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-miscompras',
  templateUrl: './miscompras.page.html',
  styleUrls: ['./miscompras.page.scss'],
})
export class MiscomprasPage implements OnInit {
  usuario: Usuario | null = null;
  historialCompras: any[] = [];

  arregloDetalles: any = [
    {
      id_detalle: 0,
      id_producto: '',
      cantidad: 0,
      id_venta: 0,
      subtotal: 0,
    }
  ]
  constructor(private dbService: BdserviceService) { }

  ngOnInit() {
    this.dbService.getUsuarioActual().subscribe((usuario) => {
      this.usuario = usuario;
      if (usuario) {
        // Llama al método fetchDetalleRealizadas sin pasar el ID del usuario
        this.dbService.fetchDetalle().subscribe((detalles) => {
          this.arregloDetalles = detalles;
        });
      }
    });
  }
}
