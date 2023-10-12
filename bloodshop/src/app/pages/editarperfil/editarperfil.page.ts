import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BdserviceService } from 'src/app/services/dbservice.service';

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


function validateBirthDate(control: FormControl) {
  const currentDate = new Date();
  const selectedDate = new Date(control.value);

  if (isNaN(selectedDate.getTime())) {
    return { invalidDate: true }; // Error si no es una fecha válida
  }

  if (selectedDate >= currentDate) {
    return { futureDate: true }; // Error si es una fecha futura
  }
  // Validación de mayor de edad (18 años)
  const minAge = 18;
  const minAgeDate = new Date();
  minAgeDate.setFullYear(minAgeDate.getFullYear() - minAge);

  if (selectedDate > minAgeDate) {
    return { underage: true }; // Error si es menor de edad
  }

  const maxAge = 120;
  const maxAgeDate = new Date();
  maxAgeDate.setFullYear(maxAgeDate.getFullYear() - maxAge);

  if (selectedDate < maxAgeDate) {
    return { over100: true }; // Error si tiene más de 100 años
  }
  return null; // Si la fecha es válida
}



function matchPassword(control: FormControl) {
  const contraseña = control.root.get('contraseña'); // Obtén el control de contraseña original
  const confirmcontraseña = control.value; // Valor de confirmación de contraseña

  if (contraseña && confirmcontraseña !== contraseña.value) {
    return { mismatch: true }; // Error si las contraseñas no coinciden
  }

  return null; // Si las contraseñas coinciden
}

function matchEmail(control: FormControl) {
  const correo = control.root.get('correo'); // Obtén el control de correo electrónico original
  const confirmcorreo = control.value; // Valor de confirmación de correo electrónico

  if (correo && confirmcorreo !== correo.value) {
    return { mismatched: true }; // Error si los correos electrónicos no coinciden
  }

  return null; // Si los correos electrónicos coinciden
}

function validatePhoneNumber(control: FormControl) {
  const phoneNumber = control.value;

  if (!phoneNumber) {
    return null; // No hay error si el campo está vacío
  }

  // Validar usando una expresión regular (ajusta según tus necesidades)
  if (!/^[0-9]{9}$/.test(phoneNumber)) {
    return { invalidPhoneNumber: true }; // Error si el formato no coincide
  }

  return null; // Si el número de teléfono es válido
}

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {

  pattern = {
    nombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
    telefono: /^\d{1,9}$/,
    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    contraseña: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  }

  editarForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private db: BdserviceService, private router: Router) { }
  validateRutFormat(control: FormControl) {
    const rut = control.value;
    if (!RutValidator.validaRut(rut)) {
      return { invalidRut: true };
    }
    return null;
  }
  submitForm() {
    const perfilActualizado = this.editarForm.value;
    const tokenGuardado = localStorage.getItem('tokenActual');
    if (tokenGuardado) {
      const perfil = this.db.obtenerPerfilPorToken(tokenGuardado);
      if (perfil) {
        this.db.modificarPerfil(
          perfil.id, // Asegurándonos de que el perfil obtenido tenga un 'id'
          perfilActualizado.correo,
          perfilActualizado.nombre,
          perfilActualizado.apellido,
          perfilActualizado.telefono,
          perfilActualizado.contraseña
        )
          .then(() => {
            this.db.presentAlertP("Perfil Modificado");
            this.navCtrl.navigateBack('/hombre');  // Adaptar a la ruta donde desees regresar
          });
      }
    }
  }

  ngOnInit() {
    this.initForm();
    this.cargarDatosActuales();
  }

  initForm() {
    this.editarForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(this.pattern.nombre)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(this.pattern.nombre)]],
      rut: ['', [Validators.required, this.validateRutFormat.bind(this)]],
      fechnac: ['', [Validators.required, validateBirthDate]],
      telefono: ['', [Validators.required, validatePhoneNumber]],
      correo: ['', [Validators.required, Validators.pattern(this.pattern.correo)]],
      confcorreo: ['', [Validators.required, matchEmail]],
      contraseña: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.pattern.contraseña)]],
      confcontraseña: ['', [Validators.required, matchPassword]],
    });
    this.cargarDatosActuales();

  }

  cargarDatosActuales() {
    const tokenGuardado = localStorage.getItem('tokenActual');
    if (tokenGuardado) {
      const perfil = this.db.obtenerPerfilPorToken(tokenGuardado);
      if (perfil) {
        this.editarForm.setValue({
          nombre: perfil.nombre,
          apellido: perfil.apellido,
          telefono: perfil.telefono,
          fechanac: perfil.fechanacimiento,
          rut: perfil.rut,
          correo: perfil.correo,
          clave: perfil.clave,
        });
      }
    }
  }

}