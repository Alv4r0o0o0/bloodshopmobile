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

  loginForm!: FormGroup; // Declarar el formulario FormGroup

  constructor(private formBuilder: FormBuilder, private animationCtrl: AnimationController, private navCtrl: NavController, private loadingCtrl: LoadingController, private db: BdserviceService) {
    // Inicializa el formulario y agrega validaciones

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],

    });
  }

  onSubmit() {

  }

  // Esta es la nueva función login que gestiona la redirección
  async login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    // Si las credenciales corresponden al usuario administrador
    if (email === 'admin@admin.cl' && password === 'admin') {
      this.navCtrl.navigateForward('/hombre');
    } else {
      // Si no, verifica en la base de datos
      const result = await this.db.iniciarSesion(email, password);
      if (result) {
        this.navCtrl.navigateForward('/hombre');
      } else {
        this.mensajeError = "Las credenciales son incorrectas";
        
      }
    }
  }
}
