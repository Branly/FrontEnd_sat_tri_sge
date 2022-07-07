import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Expedient } from './../interfaces/Recepcion';
import { Injectable } from "@angular/core";
import { GeneralService } from './general.service';

@Injectable({
    providedIn: 'root'
  })
  export class RecepcionService{

    constructor(
        private serviceRecepcion: GeneralService
    ){}

    getExpendient(): Observable<Expedient[]>{
        return this.serviceRecepcion.getData<Expedient[]>(environment.API_IFI_SIPF,`Files/Receptionist`);
    }

  }