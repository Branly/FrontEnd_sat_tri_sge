import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './general-module/components/home/home.component';
import { CallbackOauth2Component } from './general-module/seguridad/callback-oauth2/callback-oauth2.component';
import { AuthorizationGuard } from './general-module/seguridad/guards/authorization.guard';

const routes: Routes = [

  /**
    * Carga el modulo de administracion en modo peresozo, es decir hasta que se invoca la ruta
    */
   {
    path: 'administracion',
    canActivate: [AuthorizationGuard],
    children:
      [
        {
          path: '',
          loadChildren: () => import('./administracion-module/administracion.module').then(m => m.AdministracionModuleModule)
        },
      ]
  },

  /**
   * Componente de retorno una vez se tenga respuesta del servidor de autorización
   */
  {
    path: 'callback',
    component: CallbackOauth2Component
  },
  /**
  * Carga el modulo de resportes en modo peresozo, es decir hasta que se invoca la ruta
  */
   {
    path: 'consulta',
    canActivate: [AuthorizationGuard],
    children:
      [
        {
          path: '',
          loadChildren: () => import('./consulta-module/consulta.module').then(m => m.ConsultaModule)
        },
      ]
  },
  /**
   * Rutas que no coincidan o sin ruta se redirige a la ruta raíz
   */
   {
    path: 'inicio',
    component: HomeComponent,
    canActivate: [AuthorizationGuard]
  },
  /**
   * Rutas que no coincidan o sin ruta se redirige a la ruta raíz
   */
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
