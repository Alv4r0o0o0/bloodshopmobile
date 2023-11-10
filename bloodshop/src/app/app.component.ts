import { Component } from '@angular/core';
import { BdserviceService } from './services/dbservice.service'; // Asegúrate de importar el servicio correcto
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  usuario: any; 
  logueado: number = 0;
  constructor(private bdService: BdserviceService, private navCtrl: NavController) {
    this.usuario = {};
  }
  obtenerNumeroCarrito(): number {
    return this.bdService.obtenerCarrito().length;
  }
  estaLogueado(): boolean{
    const rolActual = this.bdService.getRolActual();
    return rolActual === 1 || rolActual === 2;
  }

  esAdministrador(): boolean {
    return this.bdService.getRolActual() === 2; // Asumiendo que el ID del rol de administrador es 2
  }
  cerrarSesion(){
    this.logueado = 0;
    this.bdService.setRolActual(0);
    this.navCtrl.navigateForward('/home');
    this.bdService.presentAlertP("Has cerrado sesión con exito!");
  }
}