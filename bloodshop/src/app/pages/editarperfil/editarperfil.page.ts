import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  id = "";
  nombre = "";
  apellido = "";
  fechanacimiento = "";
  rut = "";
  correo = "";
  telefono = "";
  clave = "";

  pattern = {
    nombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
    telefono: /^\d{1,9}$/,
    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    contraseña: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  }

  editarForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private activatedRouter: ActivatedRoute, private navCtrl: NavController, private db: BdserviceService, private router: Router) { 
    this.editarForm = this.formBuilder.group({
      nombre: [this.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(this.pattern.nombre)]],
      apellido: [this.apellido, [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(this.pattern.nombre)]],
      rut: [this.rut, [Validators.required, this.validateRutFormat.bind(this)]],
      fechnac: [this.fechanacimiento, [Validators.required, validateBirthDate]],
      telefono: [this.telefono, [Validators.required, validatePhoneNumber]],
      correo: [this.correo, [Validators.required, Validators.pattern(this.pattern.correo)]],
      confcorreo: ['', [Validators.required, matchEmail]],
      contraseña: [this.clave, [Validators.required, Validators.minLength(8), Validators.pattern(this.pattern.contraseña)]],
      confcontraseña: ['', [Validators.required, matchPassword]],
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
  }
  cargarDatosActuales() {
    const tokenGuardado = localStorage.getItem('tokenActual');
    if (tokenGuardado) {
      this.db.obtenerPerfilPorToken(tokenGuardado)
        .then(perfil => {
          this.editarForm.setValue({
            nombre: perfil.nombre,
            apellido: perfil.apellido,
            telefono: perfil.telefono,
            fechnac: perfil.fechanacimiento,
            rut: perfil.rut,
            correo: perfil.correo,
            contraseña: '', // La contraseña debe ser ingresada por el usuario
            confcontraseña: '',
          });
        })
        .catch(error => {
          console.error("Error al cargar el perfil:", error);
        });
    }
  }
  
  async guardarCambios() {
    if (this.editarForm.valid) {
      const formValues = this.editarForm.value;
      const usuarioActualizado: Usuario = {
        id: /* Aquí necesitas obtener el ID del usuario actual. */,
        nombre: formValues.nombre,
        apellido: formValues.apellido,
        fechanacimiento: formValues.fechnac,
        rut: formValues.rut,
        correo: formValues.correo,
        telefono: formValues.telefono,
        clave: formValues.contraseña,
        token: localStorage.getItem('tokenActual'),
        id_rol: /* Aquí necesitas obtener el rol del usuario actual. */
      };
  
      this.db.actualizarPerfil(usuarioActualizado, formValues.contraseña)
        .then(() => this.db.presentAlertP("Perfil actualizado exitosamente."))
        .catch(error => this.db.presentAlertN("Error al actualizar el perfil: " + error));
    }
  }
}