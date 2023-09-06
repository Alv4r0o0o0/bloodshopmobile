import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationController, IonCard, LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChildren('card1') elementsToAnimate!: QueryList<ElementRef>;
  animations: any[] = [];
  
  mensajeError: String = '';

  loginForm!: FormGroup; // Declarar el formulario FormGroup

  constructor(private formBuilder: FormBuilder, private animationCtrl: AnimationController, private navCtrl: NavController, private loadingCtrl: LoadingController) {
    // Inicializa el formulario y agrega validaciones

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      
    });
  }

  ngAfterViewInit() {
    this.elementsToAnimate.forEach(element => {
      const animation = this.animationCtrl
        .create()
        .addElement(element.nativeElement)
        .duration(1500)
        .iterations(Infinity)
        .direction('alternate')
        .fromTo('background', 'blue', 'var(--background)');

      this.animations.push(animation);
    });

    this.playAll();
  }

  playAll() {
    this.animations.forEach(animation => {
      if (animation) {
        animation.play();
      }
    });
  }

  onSubmit() {

  }

  // Esta es la nueva función login que gestiona la redirección
  async login() {   
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (email === 'admin@admin.cl' && password === 'admin') {    
      this.navCtrl.navigateForward('/hombre');// Llama a la función login cuando las credenciales son correctas
    } else {
      this.navCtrl.navigateForward('/home');
       this.mensajeError =("Las credenciales son incorrectas")
    }
  }
  
}
