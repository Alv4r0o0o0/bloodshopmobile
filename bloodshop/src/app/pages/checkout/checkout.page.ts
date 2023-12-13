import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BdserviceService } from 'src/app/services/dbservice.service';
import { Usuario } from 'src/app/services/usuario';
import { Zapatilla } from 'src/app/services/zapatilla';

const RutValidator = {
  validaRut(rutCompleto: string): boolean {
    rutCompleto = rutCompleto.replace('‐', '-');

    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) {
      return false;
    }

    const tmp = rutCompleto.split('-');
    const digv = tmp[1].toUpperCase();
    const rut = tmp[0];

    return this.dv(rut) === digv;
  },

  dv(T: string): string {
    let M = 0, S = 1;
    for (let i = T.length - 1; i >= 0; i--) {
      S = (S + parseInt(T.charAt(i)) * (9 - M++ % 6)) % 11;
    }
    return S ? (S - 1).toString() : 'k';
  }
};
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  pattern = {
    nombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
    telefono: /^\d{1,9}$/,
    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    contraseña: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  }
  zapatilla!: Zapatilla;
  usuario: Usuario | null = null;
  montoTotal: number = 0;
  cantidadTotal: number = 0;
  checkoutForm!: FormGroup;
  zapatillasEnCarrito: Zapatilla[] = [];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, public bdService: BdserviceService, private navCtrl: NavController) {
    this.checkoutForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern(this.pattern.nombre)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern(this.pattern.nombre)]],
      rut: ['', [Validators.required, this.validateRutFormat.bind(this)]],
      correo: ['', [Validators.required, Validators.pattern(this.pattern.correo)]],
      direccion: ['', [Validators.required,]],
    });
  }
  validateRutFormat(control: FormControl) {
    const rut = control.value;
    if (!RutValidator.validaRut(rut)) {
      return { invalidRut: true };
    }
    return null;
  }

  ngOnInit() {
    this.bdService.getUsuarioActual().subscribe((usuario) => {
      this.usuario = usuario;
    });
    this.zapatillasEnCarrito = this.bdService.obtenerCarrito();
  }

  realizarCompra() {
    this.zapatillasEnCarrito.forEach((zapatilla => {
      this.bdService.agregarDetalle(this.zapatilla, this.calcularCantidadTotal(), this.calcularCompraTotal(), this.usuario?.correo);
    }));
    this.navCtrl.navigateForward(['/miscompras']);
    this.bdService.presentAlertP("Has comprado con exito!");
  }

  calcularCompraTotal() {
    return this.zapatillasEnCarrito.reduce((total, zapatilla, index) => {
      return total + zapatilla.precio * this.bdService.obtenerCantidadSeleccionada(index);
    }, 0);
  }

  calcularCantidadTotal() {
    return this.zapatillasEnCarrito.reduce((total, zapatilla, index) => {
      return total + this.bdService.obtenerCantidadSeleccionada(index);
    }, 0);
  }
}




//    if (this.checkoutForm.valid) {
//const formValue = this.checkoutForm.value;
//this.bdService.agregarDetalle(this.zapatilla.id, this.calcularCantidadTotal(), this.calcularCompraTotal(), formValue.correo);
//this.navCtrl.navigateForward(['/tablaventas']);
//this.bdService.presentAlertP("Has comprado con exito!");
//} 