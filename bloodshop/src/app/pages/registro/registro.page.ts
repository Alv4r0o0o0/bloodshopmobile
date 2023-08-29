import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

function rutValidator(control: AbstractControl): ValidationErrors | null {
  const rut = control.value;

  if (!rut) {
    return null; // Si el campo está vacío, no hay error
  }

  const cleanRut = rut.replace(/[^0-9kK]/g, ''); // Remover caracteres no válidos

  if (cleanRut.length !== 9) {
    return { invalidLength: true }; // RUT debe tener 9 dígitos
  }

  const rutDigits = cleanRut.slice(0, -1);
  const rutVerifier = cleanRut.slice(-1).toUpperCase();

  const verifierCalc = (11 - (parseInt(rutDigits) % 11)) % 11;
  const verifier = verifierCalc === 10 ? 'K' : verifierCalc.toString();

  if (verifier !== rutVerifier) {
    return { invalidRut: false };
  }

  return null; // RUT válido
}


function nombreValidator(control: AbstractControl): ValidationErrors | null {
  const nombre = control.value;

  if (!nombre) {
    return null; // Si el campo está vacío, no hay error
  }

  const nombreval = nombre.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''); // Remover caracteres no válidos

  if (nombreval.length < 4 || nombreval.length > 15) {
    return { invalidLength: true }; // Nombre debe tener entre 4 y 15 letras
  }

  if (nombre !== nombreval) {
    return { invalidCharacters: true }; // Nombre contiene caracteres no válidos
  }

  return null; // Nombre válido
}

function apellidoValidator(control: AbstractControl): ValidationErrors | null {
  const apellido = control.value;

  if (!apellido) {
    return null; // Si el campo está vacío, no hay error
  }

  const apellidoval = apellido.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''); // Remover caracteres no válidos

  if (apellidoval.length < 4 || apellidoval.length > 15) {
    return { invalidLength: true }; // Apellido debe tener entre 4 y 15 letras
  }

  if (apellido !== apellidoval) {
    return { invalidCharacters: true }; // Apellido contiene caracteres no válidos
  }

  return null; // Apellido válido
}

function telefonoValidator(control: AbstractControl): ValidationErrors | null {
  const telefono = control.value;

  if (!telefono) {
    return null; // Si el campo está vacío, no hay error
  }

  if (telefono.length !== 9) {
    return { invalidLength: true }; // Teléfono debe tener exactamente 8 caracteres
  }

  return null; // Teléfono válido
}


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, nombreValidator,]],
      apellido: ['', Validators.required, apellidoValidator],
      rut: ['', [Validators.required, rutValidator]],
      telefono: ['', [Validators.required, telefonoValidator]],
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.registroForm) {
      if (this.registroForm.valid) {
        // El formulario es válido, realizar acción
      }
    }
  }
}

