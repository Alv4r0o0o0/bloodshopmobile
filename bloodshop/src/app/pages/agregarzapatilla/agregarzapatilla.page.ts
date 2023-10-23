import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-agregarzapatilla',
  templateUrl: './agregarzapatilla.page.html',
  styleUrls: ['./agregarzapatilla.page.scss'],
})
export class AgregarzapatillaPage implements OnInit {
  nombrezapatilla = "";
  marca = 0;  // Asumiendo que vamos a trabajar con el ID de la marca directamente.
  descripcion = "";
  foto = ""; // Podría ser un enlace o un path hacia una foto.
  precio = 0;
  tallas = "7us-12us";  // Asumiendo un valor predeterminado, pero esto puede cambiar.
  cantidad = 0;
  base64Image: string = ''; 
  imageToShow: any = ''; 

  constructor(public router: Router, private db: BdserviceService) { }

  ngOnInit() {
  }
  onImageChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.foto = reader.result as string;
    };
}

  insertar() {
    this.db.agregar(this.nombrezapatilla, this.marca, this.descripcion, this.foto, this.precio, this.tallas, this.cantidad);
    const zapatillasImages = JSON.parse(localStorage.getItem('zapatillasImages') || '{}');
    zapatillasImages[this.nombrezapatilla] = this.foto; // asumiendo que 'this.id' es único para cada zapatilla
    localStorage.setItem('zapatillasImages', JSON.stringify(zapatillasImages));
    
    this.db.presentAlertP("Registro Realizado");
    this.router.navigate(['/tablazapatilla']);
  }
}