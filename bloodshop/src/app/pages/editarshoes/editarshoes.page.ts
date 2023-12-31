import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-editarshoes',
  templateUrl: './editarshoes.page.html',
  styleUrls: ['./editarshoes.page.scss'],
})
export class EditarshoesPage implements OnInit {
  id = "";
  nombrezapatilla = "";
  marca = "";
  descripcion = "";
  foto = "";
  precio = 0;
  tallas = "";
  cantidad = 0;
  seccion = "";
  
  constructor(private router: Router, private activedRouter: ActivatedRoute, private bd: BdserviceService) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.id = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];
        this.nombrezapatilla = this.router.getCurrentNavigation()?.extras?.state?.['nombreEnviado'];
        this.marca = this.router.getCurrentNavigation()?.extras?.state?.['marcaEnviado'];
        this.descripcion = this.router.getCurrentNavigation()?.extras?.state?.['descripcionEnviado'];
        this.foto = this.router.getCurrentNavigation()?.extras?.state?.['fotoEnviado'];
        this.precio = this.router.getCurrentNavigation()?.extras?.state?.['precioEnviado'];
        this.tallas = this.router.getCurrentNavigation()?.extras?.state?.['tallasEnviado'];
        this.cantidad = this.router.getCurrentNavigation()?.extras?.state?.['cantidadEnviado'];
        this.seccion = this.router.getCurrentNavigation()?.extras?.state?.['seccionEnviado'];
      }
    })
   }
  editar(){
    this.bd.modificar(this.id,this.nombrezapatilla, this.marca, this.descripcion,this.foto,this.precio,this.tallas,this.cantidad,this.seccion);
    const zapatillasImages = JSON.parse(localStorage.getItem('zapatillasImages') || '{}');
    zapatillasImages[this.id] = this.foto;
    localStorage.setItem('zapatillasImages', JSON.stringify(zapatillasImages));
    
    this.bd.presentAlertP("Registro Modificado");
    this.router.navigate(['/tablazapatilla']);
  }
  ngOnInit() {
  }
  
  onImageChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.foto = reader.result as string;
    };
  }

}
