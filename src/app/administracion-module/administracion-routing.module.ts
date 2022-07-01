import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizationGuard } from "../general-module/seguridad/guards/authorization.guard";
import { RecepcionExpedienteComponent } from "./componentes-internos/recepcion-expediente/recepcion-expediente.component";

const routes: Routes = [
    {
        path: '', canActivateChild: [AuthorizationGuard],
        children:
        [
            { path: 'recepcion', component: RecepcionExpedienteComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministracionRoutingModule { }
