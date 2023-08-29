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





@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required,]],
      apellido: ['', Validators.required],
      rut: ['', [Validators.required, rutValidator]],
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

