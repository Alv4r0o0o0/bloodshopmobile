import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginForm: FormGroup; // Declarar el formulario FormGroup
  
  constructor(private formBuilder: FormBuilder) {
    // Inicializa el formulario y agrega validaciones
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // Función para realizar la acción de inicio de sesión
  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      // Aquí puedes realizar la lógica de inicio de sesión, por ejemplo, enviar los datos al servidor
      console.log('Inicio de sesión exitoso', email, password);
    }
  }
}
