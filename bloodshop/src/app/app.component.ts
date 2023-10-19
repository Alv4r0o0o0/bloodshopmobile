import { Component } from '@angular/core';
import { BdserviceService } from './services/dbservice.service'; // Asegúrate de importar el servicio correcto

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(public bdService: BdserviceService) {
  }
  obtenerNumeroCarrito(): number {
    return this.bdService.obtenerCarrito().length;
  }
  esAdministrador(): boolean {
    // Verifica si el usuario actual tiene un rol de administrador
    return this.bdService.getRolActual() === 2; // Asumiendo que el ID del rol de administrador es 2
  }
  cerrarSesion(){
    this.bdService.cerrarSesion();
  }
}