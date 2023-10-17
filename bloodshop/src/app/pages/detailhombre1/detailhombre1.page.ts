import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdserviceService } from 'src/app/services/dbservice.service';// Reemplaza 'ruta-de-tu-servicio' con la ubicación correcta
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detailhombre1',
  templateUrl: './detailhombre1.page.html',
  styleUrls: ['./detailhombre1.page.scss'],
})
export class Detailhombre1Page implements OnInit {
  zapatilla: any = {};
  tallas: string[] = [];
  selectedTalla: string = '';
  selectedCantidad: number = 0;
  cantidadOptions: number[] = [];
  elegirForm: FormGroup;
  numProductosEnCarrito: number = 0;
  cantidadSeleccionada: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bdService: BdserviceService,
    private formBuilder: FormBuilder, private navCtrl: NavController,
  ) {
    this.elegirForm = this.formBuilder.group({
      select: ['', [Validators.required]],
      select1: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    const zapatillaId = this.route.snapshot.paramMap.get('id');
    this.loadZapatillaDetails(zapatillaId);
    this.cantidadOptions = Array.from({ length: 3 }, (_, i) => i + 1); // Opciones de cantidad
  }

  loadZapatillaDetails(id: string | null) {
    if (id) {
      this.bdService.fetchZapatillaDetails(id).subscribe((zapatilla) => {
        this.zapatilla = zapatilla;
        const todasLasTallas = zapatilla.tallas.split('-');
        this.tallas = todasLasTallas.filter((talla) => talla.trim() !== '' && talla.trim() !== '0');
      });
    }
  }

  addToCart() {
    if (this.cantidadSeleccionada > this.zapatilla.cantidad) {
      this.bdService.presentAlertN("No hay suficiente stock de esta talla.");
      return; // No se agrega al carrito si no hay suficiente stock.
    }
    this.bdService.agregarAlCarrito(this.zapatilla, this.cantidadSeleccionada);
  }
  goToCart(){

  }


}