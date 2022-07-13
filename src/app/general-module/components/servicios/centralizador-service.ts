import { Data } from './../interfaces/centralizador';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Expedient } from './../interfaces/Recepcion';
import { Injectable } from "@angular/core";
import { GeneralService } from './general.service';

@Injectable({
    providedIn: 'root'
  })
  export class CentralizadorService{

    constructor(
        private serviceCentralizador: GeneralService
    ){}

    getExpendient(): Observable<Expedient[]>{
        return this.serviceCentralizador.getData<Expedient[]>(environment.API_IFI_SIPF,`Files/Files/90007655/7`);
    }

    getType(tipo: Number): Observable<Data[]>{
      return this.serviceCentralizador.getData<Data[]>(environment.API_IFI_SIPF,`CatData/${tipo}`);
    }

    getSubType(tipo: Number): Observable<Data[]>{
      return this.serviceCentralizador.getData<Data[]>(environment.API_IFI_SIPF,`CatData/Sub/${tipo}`);
    }

    getInformation(tipo: String): Observable<Expedient[]>{
      return this.serviceCentralizador.getData<Expedient[]>(environment.API_IFI_SIPF,`Files/Verification/${tipo}`);
    }

  }
