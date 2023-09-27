import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-agregarzapatilla',
  templateUrl: './agregarzapatilla.page.html',
  styleUrls: ['./agregarzapatilla.page.scss'],
})
export class AgregarzapatillaPage implements OnInit {
  nombrezapatilla : string = "";
  marca: number = 0;  // Asumiendo que vamos a trabajar con el ID de la marca directamente.
  descripcion = "";
  foto = ""; // Podría ser un enlace o un path hacia una foto.
  precio: number = 0;
  tallas = "7us-12us";  // Asumiendo un valor predeterminado, pero esto puede cambiar.
  cantidad: number = 0;

  constructor(public router: Router, private db: BdserviceService) { }

  ngOnInit() {
  }
  onImageChange(event: any) {
    const file = event.target.files[0];
    // Aquí puedes manejar el archivo. Por ejemplo, leerlo, cargarlo, etc.
}

  insertar() {
    this.db.agregar(this.nombrezapatilla, this.marca, this.descripcion, this.foto, this.precio, this.tallas, this.cantidad);
    this.db.presentAlertP("Registro Realizado");
    this.router.navigate(['/tablazapatilla']);
  }
}