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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
