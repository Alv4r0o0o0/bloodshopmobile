import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { BdserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  usuario!: Usuario;
  nuevaContrasena: string = '';

  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private dbService: BdserviceService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      // Obtén el usuario del estado de la navegación
      this.usuario = this.activatedRoute.snapshot.params['usuario'];
    });
  }

  guardarCambios() {
    this.dbService.modificarPerfil(
      this.usuario.id,
      this.usuario.nombre,
      this.usuario.apellido,
      this.usuario.fechanacimiento,
      this.usuario.rut,
      this.usuario.correo,
      this.usuario.telefono,
    );
    this.navCtrl.navigateBack('/perfil');
  }
}