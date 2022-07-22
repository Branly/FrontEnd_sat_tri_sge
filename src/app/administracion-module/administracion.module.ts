import { MaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { GeneralModule } from './../general-module/general.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AdministracionRoutingModule } from "./administracion-routing.module";
import { RecepcionExpedienteComponent } from "./componentes-internos/recepcion-expediente/recepcion-expediente.component";
import { CentralizadorentradaExpedienteComponent } from './componentes-internos/centralizadorentrada-expediente/centralizadorentrada-expediente.component';
import { PresidenteExpedienteComponent } from './componentes-internos/presidente-expediente/presidente-expediente.component';
import { ProfesionalExpedienteComponent } from './componentes-internos/profesional-expediente/profesional-expediente.component';
import { CoordinadorExpedienteComponent } from './componentes-internos/coordinador-expediente/coordinador-expediente.component';
import { CrearExpedienteComponent } from './componentes-internos/crear-expediente/crear-expediente.component';
import { PrestamoExpedienteComponent } from './componentes-internos/prestamo-expediente/prestamo-expediente.component';
import { SecretarioAgendaComponent } from './componentes-internos/secretario-agenda/secretario-agenda.component';
import { ListaColaboradorComponent } from './componentes-internos/lista-colaborador/lista-colaborador.component';
import { ComentarioProvidenciaComponent } from './componentes-internos/comentario-providencia/comentario-providencia.component';
import { SupervisorExpedienteComponent } from './componentes-internos/supervisor-expediente/supervisor-expediente.component';


@NgModule({
    declarations: [
        RecepcionExpedienteComponent,
        CentralizadorentradaExpedienteComponent,
        PresidenteExpedienteComponent,
        ProfesionalExpedienteComponent,
        CoordinadorExpedienteComponent,
        CrearExpedienteComponent,
        PrestamoExpedienteComponent,
        SecretarioAgendaComponent,
        ListaColaboradorComponent,
        ComentarioProvidenciaComponent,
        SupervisorExpedienteComponent,
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