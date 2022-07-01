import { GeneralModule } from './../general-module/general.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AdministracionRoutingModule } from "./administracion-routing.module";
import { RecepcionExpedienteComponent } from "./componentes-internos/recepcion-expediente/recepcion-expediente.component";

@NgModule({
    declarations: [
        RecepcionExpedienteComponent,
    ],
    imports: [
        AdministracionRoutingModule,
        GeneralModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdministracionModuleModule { }