import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregarzapatilla',
  templateUrl: './agregarzapatilla.page.html',
  styleUrls: ['./agregarzapatilla.page.scss'],
})
export class AgregarzapatillaPage implements OnInit {
  nombre: String = "";
  marca: String = "";
  descripcion: String = "";
  selectedImage: File | null = null;
  precio: Number = 0;
  tallas: String = "";

  zapatillas: any[] = [];

  constructor(private router: Router) {

  }

  agregarZapatilla() {
    const newShoes = {
      nombre: this.nombre,
      marca: this.marca,
      descripcion: this.descripcion,
      imagen: this.selectedImage,
      precio: this.precio,
      tallas: this.tallas,
    };
    this.zapatillas.push(newShoes);

    this.nombre = '';
    this.marca = '';
    this.descripcion = '';
    this.selectedImage = null;
    this.precio = 0;
    this.router.navigate(['/tablazapatilla'], { state: { zapatillas: this.zapatillas } });
  }
  onImageChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
    }
  }
  ngOnInit() {
  }
}

