import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BdserviceService } from 'src/app/services/dbservice.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Usuario } from 'src/app/services/usuario';

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
  usuario!: Usuario | null;
  nuevaContrasena: string = '';
  capturedImage!: string;
  editarForm!: FormGroup;
  perfilUsuario: any[] = [];

  constructor(private cdr: ChangeDetectorRef,private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private navCtrl: NavController, private dbService: BdserviceService, private router: Router) {
    this.editarForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(this.pattern.nombre)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(this.pattern.nombre)]],
      rut: ['', [Validators.required, this.validateRutFormat.bind(this)]],
      fechnac: ['', [Validators.required, validateBirthDate]],
      telefono: ['', [Validators.required, validatePhoneNumber]],
      correo: ['', [Validators.required, Validators.pattern(this.pattern.correo)]],
      foto: [''],
    });
  }

  ngOnInit() {
    this.dbService.getUsuarioActual().subscribe((usuario) => {
      this.usuario = usuario;
      if (this.usuario) {
        this.editarForm.patchValue({
          nombre: this.usuario.nombre,
          apellido: this.usuario.apellido,
          rut: this.usuario.rut,
          fechnac: this.usuario.fechanacimiento,
          telefono: this.usuario.telefono,
          correo: this.usuario.correo,
          foto: this.usuario.foto,
        });
      }
    });
  }

  validateRutFormat(control: FormControl) {
    const rut = control.value;
    if (!RutValidator.validaRut(rut)) {
      return { invalidRut: true };
    }
    return null;
  }
  async takePhoto() {
    try {
      Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      }).then((image) => {
        if (image && image.dataUrl) {
          this.editarForm.patchValue({
            foto: image.dataUrl, // Actualiza el valor del campo 'foto' en el formulario
          });
        }
      });
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  guardarCambios() {
    if (this.usuario) {
      const { id, correo } = this.usuario;
      const { nombre, apellido, fechnac, rut, telefono } = this.editarForm.value;
      const foto = this.editarForm.get('foto')?.value || ''


      // Actualizar en la base de datos
      this.dbService.modificarPerfil(id, nombre, apellido, fechnac, rut, correo, telefono, foto);
      this.usuario = {...this.usuario, nombre, apellido, rut, fechanacimiento: fechnac, telefono, foto};
      this.dbService.setUsuario(this.usuario);
      this.dbService.presentAlertP('Se han guardado sus datos correctamente');
      this.router.navigate(['/perfil']);
    }
  }


}