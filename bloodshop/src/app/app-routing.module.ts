import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'hombre',
    loadChildren: () => import('./pages/hombre/hombre.module').then( m => m.HombrePageModule)
  },
  {
    path: 'mujer',
    loadChildren: () => import('./pages/mujer/mujer.module').then( m => m.MujerPageModule)
  },
  {
    path: 'ninos',
    loadChildren: () => import('./pages/ninos/ninos.module').then( m => m.NinosPageModule)
  },
  {
    path: 'olvidarclave',
    loadChildren: () => import('./pages/olvidarclave/olvidarclave.module').then( m => m.OlvidarclavePageModule)
  },
  {
    path: 'detailhombre1/:id',
    loadChildren: () => import('./pages/detailhombre1/detailhombre1.module').then( m => m.Detailhombre1PageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./pages/administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  {
    path: 'agregarzapatilla',
    loadChildren: () => import('./pages/agregarzapatilla/agregarzapatilla.module').then( m => m.AgregarzapatillaPageModule)
  },
  {
    path: 'tablazapatilla',
    loadChildren: () => import('./pages/tablazapatilla/tablazapatilla.module').then( m => m.TablazapatillaPageModule)
  },
  {
    path: 'editarshoes',
    loadChildren: () => import('./pages/editarshoes/editarshoes.module').then( m => m.EditarshoesPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },



];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
