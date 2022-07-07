import { MaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { GeneralModule } from './../general-module/general.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AdministracionRoutingModule } from "./administracion-routing.module";
import { RecepcionExpedienteComponent } from "./componentes-internos/recepcion-expediente/recepcion-expediente.component";
import { CentralizadorentradaExpedienteComponent } from './componentes-internos/centralizadorentrada-expediente/centralizadorentrada-expediente.component';
import { PresidenteExpedienteComponent } from './componentes-internos/presidente-expediente/presidente-expediente.component';
import { ProfesionalExpedienteComponent } from './componentes-internos/profesional-expediente/profesional-expediente.component';


@NgModule({
    declarations: [
        RecepcionExpedienteComponent,
        CentralizadorentradaExpedienteComponent,
        PresidenteExpedienteComponent,
        ProfesionalExpedienteComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        AdministracionRoutingModule,
        GeneralModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdministracionModuleModule { }