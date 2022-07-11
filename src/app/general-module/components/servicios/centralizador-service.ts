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

  }
