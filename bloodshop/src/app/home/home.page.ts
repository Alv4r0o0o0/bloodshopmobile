import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChildren('card1') elementsToAnimate!: QueryList<ElementRef>;
  animations: any[] = [];

  loginForm: FormGroup; // Declarar el formulario FormGroup

  constructor(private formBuilder: FormBuilder, private animationCtrl: AnimationController) {
    // Inicializa el formulario y agrega validaciones
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
}
