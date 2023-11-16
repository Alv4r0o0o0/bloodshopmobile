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
      nombrezapatilla: '',
      marca: '',
      descripcion: '',
      foto: '',
      precio: 0,
      tallas: '',
      cantidad: 0,
      seccion: ''
    }
  ]

  constructor(private router: Router, private bd: BdserviceService) { }

  ngOnInit() {
    this.bd.dbState().subscribe(res => {
      if (res) {
        this.bd.fetchZapatillas().subscribe(item => {
          this.arregloZapatillas = item;
          
          // Luego de obtener las zapatillas, se recuperan las imágenes desde el LocalStorage
          const zapatillasImages = JSON.parse(localStorage.getItem('zapatillasImages') || '{}');
          this.arregloZapatillas.forEach((zapatilla:any) => {
            if (zapatillasImages[zapatilla.id]) { // Aseguramos que la imagen exista para esa zapatilla
              zapatilla.foto = zapatillasImages[zapatilla.id];
            }
          });
        });
      }
    });
  }

  modificar(x: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        idEnviado: x.id,
        nombreEnviado: x.nombrezapatilla,
        marcaEnviado: x.marca,
        descripcionEnviado: x.descripcion,
        fotoEnviado: x.foto,
        precioEnviado: x.precio,
        tallasEnviado: x.tallas,
        cantidadEnviado: x.cantidad,
        seccionEnviado: x.seccion,
      }
    }
    this.router.navigate(['/editarshoes'], navigationExtras);
  }
  

  eliminar(x: any) {
    this.bd.eliminar(x.id);
    this.bd.presentAlertP("Zapatilla eliminada");
    
    const zapatillasImages = JSON.parse(localStorage.getItem('zapatillasImages') || '{}');
    if (zapatillasImages[x.id]) {
      delete zapatillasImages[x.id];
      localStorage.setItem('zapatillasImages', JSON.stringify(zapatillasImages));
    }
  }
}

