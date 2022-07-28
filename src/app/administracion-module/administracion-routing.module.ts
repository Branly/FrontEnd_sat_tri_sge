import { EspecialistaExpedienteComponent } from './componentes-internos/especialista-expediente/especialista-expediente.component';
import { SupervisorExpedienteComponent } from './componentes-internos/supervisor-expediente/supervisor-expediente.component';
import { SecretarioAgendaComponent } from './componentes-internos/secretario-agenda/secretario-agenda.component';
import { CoordinadorExpedienteComponent } from './componentes-internos/coordinador-expediente/coordinador-expediente.component';
import { ProfesionalExpedienteComponent } from './componentes-internos/profesional-expediente/profesional-expediente.component';
import { CentralizadorentradaExpedienteComponent } from './componentes-internos/centralizadorentrada-expediente/centralizadorentrada-expediente.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizationGuard } from "../general-module/seguridad/guards/authorization.guard";
import { RecepcionExpedienteComponent } from "./componentes-internos/recepcion-expediente/recepcion-expediente.component";
import { PresidenteExpedienteComponent } from './componentes-internos/presidente-expediente/presidente-expediente.component';
import { GestionGruposComponent } from './componentes-internos/gestion-grupos/gestion-grupos.component';

const routes: Routes = [
    {
        path: '', canActivateChild: [AuthorizationGuard],
        children:
        [
            { path: 'recepcion', component: RecepcionExpedienteComponent },
            {path: 'centralizadorentrada', component: CentralizadorentradaExpedienteComponent },
            {path: 'presidente', component: PresidenteExpedienteComponent},
            {path: 'profesional', component: ProfesionalExpedienteComponent},
            {path: 'coordinador', component: CoordinadorExpedienteComponent},
            {path: 'secretario', component: SecretarioAgendaComponent},
            {path: 'supervisor', component: SupervisorExpedienteComponent},
            {path: 'especialista', component: EspecialistaExpedienteComponent},
            {path: 'gestiongrupos', component: GestionGruposComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministracionRoutingModule { }
