import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './components/roles/roles.component';
import { RolesTableComponent } from './components/roles-table/roles-table.component';
import { MaterialModule } from '../material.module';
import { ConsultaRoutingRoutes } from './consulta-routing.routing';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ConsultaRoutingRoutes
  ],
  declarations: [
    RolesComponent,
    RolesTableComponent
  ]
})
export class ConsultaModule { }
