import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BdserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-tablazapatilla',
  templateUrl: './tablazapatilla.page.html',
  styleUrls: ['./tablazapatilla.page.scss'],
})
export class TablazapatillaPage implements OnInit {

  arregloZapatillas: any = [
    {
      id: '',
      nombre: '',
      marca: 0,
      descripcion: '',
      foto: '',
      precio: 0,
      tallas: '',
      cantidad: 0
    }
  ]

  constructor(private router: Router, private bd: BdserviceService) { }

  ngOnInit() {
    this.bd.dbState().subscribe(res => {
      if (res) {
        this.bd.fetchZapatillas().subscribe(item => {
          this.arregloZapatillas = item;
        })
      }
    })
  }

  modificar(x: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        idEnviado: x.id,
        nombrezapatillaEnviado: x.nombre,
        marcaEnviado: x.marca,
        descripcionEnviado: x.descripcion,
        fotoEnviado: x.foto,
        precioEnviado: x.precio,
        tallasEnviado: x.tallas,
        cantidadEnviado: x.cantidad
      }
    }
    this.router.navigate(['/modificar'], navigationExtras);
  }

  eliminar(x: any) {
    this.bd.eliminar(x.id);
    this.bd.presentAlert("Zapatilla Eliminada");
  }
}

