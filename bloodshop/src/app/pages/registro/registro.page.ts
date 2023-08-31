import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

function validateRut(control: FormControl): ValidationErrors | null {
  const rut = control.value;

  if (!rut) {
    return null; // No hay error si el campo está vacío
  }

  if (!/^(\d{1,2}(\.\d{3}){2}-[\dkK])$/.test(rut)) {
    return { invalidRut: true }; // Error si el formato no coincide
  }
  return null; 
}

function validateBirthDate(control: FormControl) {
  const currentDate = new Date();
  const selectedDate = new Date(control.value);

  if (isNaN(selectedDate.getTime())) {
    return { invalidDate: true }; // Error si no es una fecha válida
  }

  if (selectedDate >= currentDate) {
    return { futureDate: true }; // Error si es una fecha futura
  }

  return null; // Si la fecha es válida
}

function validatePhoneNumber(control: FormControl) {
  const phoneNumber = control.value;

  if (!phoneNumber) {
    return null; // No hay error si el campo está vacío
  }

  // Expresión regular para validar números de teléfono en formatos comunes
  const phonePattern = /^(?:\+\d{1,3}[- ]?)?(?:\(\d{1,4}\) ?)?\d{4,}$/;

  if (!phonePattern.test(phoneNumber)) {
    return { invalidPhoneNumber: true }; // Error si el formato no coincide
  }

  return null; // Si el número de teléfono es válido
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
pattern={
  nombre: /^(?=.*[A-Z])/,
  rut: /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/,
  telefono: /^\d{1,9}$/,
  correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  contraseña: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,

}
  
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(this.pattern.nombre)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(this.pattern.nombre)]],  
      rut: ['', [Validators.required, Validators.pattern(this.pattern.rut), validateRut]],
      fechnac: ['', [Validators.required, validateBirthDate]],
      telefono: ['', [Validators.required, Validators.pattern(this.pattern.telefono), validatePhoneNumber]],
      correo: ['', [Validators.required, Validators.pattern(this.pattern.correo)]],
      contraseña:['',[Validators.required, Validators.minLength(8), Validators.pattern(this.pattern.contraseña)]],
    });
  }
  ngOnInit() {
  }
}

