import { Component } from '@angular/core';
import { BdserviceService } from './services/dbservice.service'; // Asegúrate de importar el servicio correcto

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private bdService: BdserviceService) {
  }
  obtenerNumeroCarrito(): number {
    return this.bdService.obtenerCarrito().length;
  }
}