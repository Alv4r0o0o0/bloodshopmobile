import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  nombreRecibido: number = 0;
  apellidoRecibido: string = "";
  rutRecibido: number = 0;
  fechRecibido: string = "";
  telefonoRecibido: number = 0;
  emailRecibido: string = "";
  contrasenaRecibido: string = "";
  lista: any = [
    {
      nombre: "",
      apellido:"",
      rut:"",
      fecha:"",
      telefono:"",
      email:"",
      contraseña:"",
    }
  ];

  private animation!: Animation;

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private animationCtrl: AnimationController,
    private formBuilder: FormBuilder
  ) {
    this.activeRouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.nombreRecibido = this.router.getCurrentNavigation()?.extras?.state?.['nombreEnviado'];
        this.apellidoRecibido = this.router.getCurrentNavigation()?.extras?.state?.['apellidoEnviado'];
        this.rutRecibido = this.router.getCurrentNavigation()?.extras?.state?.['rutEnviado'];
        this.fechRecibido = this.router.getCurrentNavigation()?.extras?.state?.['rutEnviado'];
        this.telefonoRecibido = this.router.getCurrentNavigation()?.extras?.state?.['fechEnviado'];
        this.emailRecibido = this.router.getCurrentNavigation()?.extras?.state?.['emailEnviado'];
        this.contrasenaRecibido = this.router.getCurrentNavigation()?.extras?.state?.['contrasenaEnviado'];
      }
    });


  }
  enviarDatos() {
    // Aquí puedes realizar acciones con los datos ingresados, como enviarlos a través de una solicitud HTTP
    // o realizar algún otro procesamiento necesario.
    console.log("Nombre:", this.nombreRecibido);
    console.log("Apellido:", this.apellidoRecibido);
    console.log("Rut:", this.rutRecibido);
    console.log("Fecha:", this.fechRecibido);
    console.log("Telefono:", this.telefonoRecibido);
    console.log("Email:", this.emailRecibido);
    console.log("Contraseña:", this.contrasenaRecibido);
  }



  ngOnInit() {
  }

}
