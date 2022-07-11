import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Expedient } from './../interfaces/Recepcion';
import { Injectable } from "@angular/core";
import { GeneralService } from './general.service';

@Injectable({
    providedIn: 'root'
  })
  export class CoordinadorService{

    constructor(
        private serviceCoordinador: GeneralService
    ){}

    getExpendient(): Observable<Expedient[]>{
        return this.serviceCoordinador.getData<Expedient[]>(environment.API_IFI_SIPF,`Files/Coordinator`);
    }

  }
