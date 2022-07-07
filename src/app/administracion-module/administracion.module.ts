import { MaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { GeneralModule } from './../general-module/general.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AdministracionRoutingModule } from "./administracion-routing.module";
import { RecepcionExpedienteComponent } from "./componentes-internos/recepcion-expediente/recepcion-expediente.component";
import { CentralizadorentradaExpedienteComponent } from './componentes-internos/centralizadorentrada-expediente/centralizadorentrada-expediente.component';


@NgModule({
    declarations: [
        RecepcionExpedienteComponent,
        CentralizadorentradaExpedienteComponent,
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