import { CrearSupervisorComponent } from './componentes-internos/gestion-grupos/crear-supervisor/crear-supervisor.component';
import { ProfesionalGrupoComponent } from './componentes-internos/gestion-grupos/profesional-grupo/profesional-grupo.component';
import { ModificarGrupoComponent } from './componentes-internos/gestion-grupos/modificar-grupo/modificar-grupo.component';
import { CrearGrupoComponent } from './componentes-internos/gestion-grupos/crear-grupo/crear-grupo.component';
import { GestionGruposComponent } from './componentes-internos/gestion-grupos/gestion-grupos.component';
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
import { ListaColaboradorComponent } from './componentes-internos/lista-colaborador/lista-colaborador.component';
import { ComentarioProvidenciaComponent } from './componentes-internos/comentario-providencia/comentario-providencia.component';
import { SupervisorExpedienteComponent } from './componentes-internos/supervisor-expediente/supervisor-expediente.component';
import { EspecialistaExpedienteComponent } from './componentes-internos/especialista-expediente/especialista-expediente.component';
import { SecretarioAgendaComponent } from './componentes-internos/secretario-agenda/secretario-agenda.component';
import { CrearAgendaComponent } from './componentes-internos/secretario-agenda/crear-agenda/crear-agenda.component';
import { ResolucionExpedienteComponent } from './componentes-internos/secretario-agenda/resolucion-expediente/resolucion-expediente.component';
import { ArchivosAgendaComponent } from './componentes-internos/secretario-agenda/archivos-agenda/archivos-agenda.component';
import { CentralizadorsalidaExpedienteComponent } from './componentes-internos/centralizadorsalida-expediente/centralizadorsalida-expediente.component';
import { AdjuntarCedulaComponent } from './componentes-internos/centralizadorsalida-expediente/adjuntar-cedula/adjuntar-cedula.component';
import { CrearProvidenciasalidaComponent } from './componentes-internos/centralizadorsalida-expediente/crear-providenciasalida/crear-providenciasalida.component';
import { AdjuntarProvidenciasalidaComponent } from './componentes-internos/centralizadorsalida-expediente/adjuntar-providenciasalida/adjuntar-providenciasalida.component';
import { ModificarGerenciaComponent } from './componentes-internos/centralizadorsalida-expediente/modificar-gerencia/modificar-gerencia.component';
import { AdministracionColaboradoresComponent } from './componentes-internos/administracion-colaboradores/administracion-colaboradores.component';
import { DialogCrearColaboradorComponent } from './componentes-internos/administracion-colaboradores/dialog-crear-colaborador/dialog-crear-colaborador.component';



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
        EspecialistaExpedienteComponent,
        GestionGruposComponent,
        CrearGrupoComponent,
        ModificarGrupoComponent,
        ProfesionalGrupoComponent,
        CrearSupervisorComponent
        CrearAgendaComponent, 
        ResolucionExpedienteComponent,
        ArchivosAgendaComponent,
        CentralizadorsalidaExpedienteComponent,
        AdjuntarCedulaComponent,
        CrearProvidenciasalidaComponent,
        AdjuntarProvidenciasalidaComponent,
        ModificarGerenciaComponent,
        AdministracionColaboradoresComponent,
        DialogCrearColaboradorComponent,
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
