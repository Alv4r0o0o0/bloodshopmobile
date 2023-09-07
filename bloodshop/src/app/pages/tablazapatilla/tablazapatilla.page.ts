import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tablazapatilla',
  templateUrl: './tablazapatilla.page.html',
  styleUrls: ['./tablazapatilla.page.scss'],
})
export class TablazapatillaPage implements OnInit {
  zapatillas: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.zapatillas = history.state.zapatillas || [];
  }
  getImageUrl(image: File | null): string {
    if (image) {
      // Crea una URL temporal para la imagen
      return URL.createObjectURL(image);
    } else {
      // Proporciona una URL predeterminada en caso de que no haya imagen
      return 'assets/default-image.jpg'; // Cambia 'assets/default-image.jpg' a tu imagen predeterminada
    }
  }

}
