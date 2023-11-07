import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationController, IonCard, LoadingController, NavController } from '@ionic/angular';
import { BdserviceService } from 'src/app/services/dbservice.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mensajeError: String = '';

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private db: BdserviceService) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {

  }
  

  onSubmit() {

  }

  async login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
  
    const usuario = await this.db.iniciarSesion(email, password);
    if (usuario) {
      localStorage.setItem('tokenActual', usuario.token);
      this.db.setRolActual(usuario.id_rol);
  
      // Pasa el usuario a 'hombre.ts' con los datos del usuario
      this.navCtrl.navigateForward('/hombre', {
        state: {
          usuario: usuario // Pasa el objeto 'usuario'
        }
      });
  
      this.loginForm.reset();
    }
  }
}
