import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario'; // Asegúrate de importar correctamente la interfaz Usuario
import { BdserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;
  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private dbService: BdserviceService) { }

  ngOnInit() {
    this.usuario = this.activatedRoute.snapshot.paramMap.get('usuario');
  
  }
  editarPerfil() {
    // Redirige a la página de edición de perfil con los datos del usuario
    this.navCtrl.navigateForward('/editarperfil', {
      state: {
        usuario: this.usuario,
      },
    });
  }

}
