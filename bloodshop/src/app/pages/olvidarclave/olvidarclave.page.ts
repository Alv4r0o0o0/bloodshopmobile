import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { BdserviceService } from 'src/app/services/dbservice.service';
import { Usuario } from 'src/app/services/usuario';

function matchPassword(control: FormGroup) {
  const contraseña = control.get('claveNueva'); // Obtén el control de contraseña original
  const confirmContraseña = control.get('confClaveNueva'); // Obtén el control de confirmación de contraseña

  if (contraseña && confirmContraseña !== contraseña.value) {
    return { mismatch: true }; // Error si las contraseñas no coinciden
  }

  return null; // Si las contraseñas coinciden
}


@Component({
  selector: 'app-olvidarclave',
  templateUrl: './olvidarclave.page.html',
  styleUrls: ['./olvidarclave.page.scss'],
})
export class OlvidarclavePage implements OnInit {
  errorClave = false;
  matchPasswordError = false;
  cambioClave!: FormGroup;
  usuario!: Usuario | null;
  pattern = {
    contraseña: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  };

  constructor(private formBuilder: FormBuilder, private dbService: BdserviceService, private navCtrl: NavController) {
      this.cambioClave = this.formBuilder.group({
        anteriorClave: ['', Validators.required],
        claveNueva: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.pattern.contraseña)]],
        confClaveNueva: ['', [Validators.required, matchPassword]],
      });
    }

  ngOnInit() {
    this.dbService.getUsuarioActual().subscribe((usuario) => {
      this.usuario = usuario;
    });
  }

 modificarClave() {
    if (this.cambioClave.valid) {
      const formValue = this.cambioClave.value;
      const anteriorClave = formValue.anteriorClave;

      if (this.usuario && this.usuario.clave === anteriorClave) {
        this.matchPasswordError = false;
        
        if (formValue.claveNueva === formValue.confClaveNueva) {
          this.dbService.modificarContraseña(this.usuario.correo, formValue.claveNueva);
          this.navCtrl.navigateForward(['/perfil']);
          this.dbService.presentAlertP("Contraseña cambiada con exito!");
        } else {
          this.matchPasswordError = true;
          this.dbService.presentAlertN("Contraseña no coincide!");
        }
      } else {
        this.errorClave = true;
      }
    }
  }
}