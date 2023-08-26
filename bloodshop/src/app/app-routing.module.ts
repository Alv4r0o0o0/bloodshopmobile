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
    path: 'nombre',
    loadChildren: () => import('./pages/nombre/nombre.module').then( m => m.NombrePageModule)
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
  },  {
    path: 'detailhombre1',
    loadChildren: () => import('./pages/detailhombre1/detailhombre1.module').then( m => m.Detailhombre1PageModule)
  },
  {
    path: 'detailhombre2',
    loadChildren: () => import('./pages/detailhombre2/detailhombre2.module').then( m => m.Detailhombre2PageModule)
  },
  {
    path: 'detailhombre3',
    loadChildren: () => import('./pages/detailhombre3/detailhombre3.module').then( m => m.Detailhombre3PageModule)
  },
  {
    path: 'detailhombre4',
    loadChildren: () => import('./pages/detailhombre4/detailhombre4.module').then( m => m.Detailhombre4PageModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
