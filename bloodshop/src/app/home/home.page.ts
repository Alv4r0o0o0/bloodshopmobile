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
    if (email === 'admin@admin.cl' && password === 'admin') {
      // Usuario administrador
      this.db.setRolActual(2); // 2 es el ID del rol de administrador
      this.db.logueado = 2;
      this.loginForm.reset();
      this.navCtrl.navigateForward('/hombre');
      this.db.presentAlertP("Has iniciado sesión con exito!");
    } else {
      if (usuario) {
        // Usuario normal
        this.db.setRolActual(1); // 1 es el ID del rol de usuario
        this.db.logueado = 1;
        this.loginForm.reset();
        this.navCtrl.navigateForward('/hombre');
        this.db.presentAlertP("Has iniciado sesión con exito!");
      } else {
        // Usuario incorrecto
        this.db.presentAlertN("Usuario incorrecto");
        this.loginForm.reset();
      }
    }
  }
}
