import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { Catalog } from './../interfaces/catalogo.interfece';
import { GeneralService } from './general.service';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CatalogosService {

    constructor(private generalService: GeneralService){

    }

    getCatalogDataByIdCatalog(tipo: number): Observable<Catalog[]> {
        return this.generalService.getData<Catalog[]>(environment.API_SGE_TRI,`CatData/${tipo}`);
      }

}
