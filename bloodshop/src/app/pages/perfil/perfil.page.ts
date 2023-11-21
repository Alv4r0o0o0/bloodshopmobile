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
  usuario: Usuario | null = null;
  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private dbService: BdserviceService) { }

  ngOnInit() {
    this.dbService.getUsuarioActual().subscribe((usuario) => {
      this.usuario = usuario;
    });
  
  }
  editarPerfil() {
    if (this.usuario) {
      this.navCtrl.navigateForward(['/editarperfil']);
    }
  }


}
