import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';

const routes: Routes = [
  { path: '', children: [
    {path: 'roles', component: RolesComponent}
  ] },
];

export const ConsultaRoutingRoutes = RouterModule.forChild(routes);
