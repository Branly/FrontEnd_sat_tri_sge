import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './consulta-module/components/roles/roles.component';
import { CallbackOauth2Component } from './general-module/seguridad/callback-oauth2/callback-oauth2.component';
import { AuthorizationGuard } from './general-module/seguridad/guards/authorization.guard';


const routes: Routes = [

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
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
