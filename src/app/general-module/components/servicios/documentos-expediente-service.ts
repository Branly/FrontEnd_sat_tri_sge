import { environment } from './../../../../environments/environment';
import { GeneralService } from './general.service';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DocumentosExpedienteService {
    constructor (private serviceDocumentosExpediente: GeneralService) {}

    getRejection(noExpediente: string){
        return this.serviceDocumentosExpediente.getData<Blob>(
            environment.API_SGE_TRI,`/documents/documentos/${noExpediente}`, {responseType: 'blob'}
        )
    }

}
