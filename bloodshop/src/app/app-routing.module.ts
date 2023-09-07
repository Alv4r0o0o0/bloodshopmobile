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
  },
  {
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
  {
    path: 'detailmujer1',
    loadChildren: () => import('./pages/detailmujer1/detailmujer1.module').then( m => m.Detailmujer1PageModule)
  },
  {
    path: 'detailmujer2',
    loadChildren: () => import('./pages/detailmujer2/detailmujer2.module').then( m => m.Detailmujer2PageModule)
  },
  {
    path: 'detailmujer3',
    loadChildren: () => import('./pages/detailmujer3/detailmujer3.module').then( m => m.Detailmujer3PageModule)
  },
  {
    path: 'detailmujer4',
    loadChildren: () => import('./pages/detailmujer4/detailmujer4.module').then( m => m.Detailmujer4PageModule)
  },
  {
    path: 'detailninos1',
    loadChildren: () => import('./pages/detailninos1/detailninos1.module').then( m => m.Detailninos1PageModule)
  },
  {
    path: 'detailninos2',
    loadChildren: () => import('./pages/detailninos2/detailninos2.module').then( m => m.Detailninos2PageModule)
  },
  {
    path: 'detailninos3',
    loadChildren: () => import('./pages/detailninos3/detailninos3.module').then( m => m.Detailninos3PageModule)
  },
  {
    path: 'detailninos4',
    loadChildren: () => import('./pages/detailninos4/detailninos4.module').then( m => m.Detailninos4PageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./pages/adminhome/adminhome.module').then( m => m.AdminhomePageModule)
  },
  {
    path: 'adminhombre',
    loadChildren: () => import('./pages/adminhombre/adminhombre.module').then( m => m.AdminhombrePageModule)
  },
  {
    path: 'adminmujer',
    loadChildren: () => import('./pages/adminmujer/adminmujer.module').then( m => m.AdminmujerPageModule)
  },
  {
    path: 'adminninos',
    loadChildren: () => import('./pages/adminninos/adminninos.module').then( m => m.AdminninosPageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./pages/administrador/administrador.module').then( m => m.AdministradorPageModule)
  },  {
    path: 'agregarzapatilla',
    loadChildren: () => import('./pages/agregarzapatilla/agregarzapatilla.module').then( m => m.AgregarzapatillaPageModule)
  },
  {
    path: 'tablazapatilla',
    loadChildren: () => import('./pages/tablazapatilla/tablazapatilla.module').then( m => m.TablazapatillaPageModule)
  },


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
