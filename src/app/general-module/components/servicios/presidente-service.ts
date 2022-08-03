import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Expedient } from './../interfaces/Recepcion';
import { Injectable } from "@angular/core";
import { GeneralService } from './general.service';

@Injectable({
    providedIn: 'root'
  })
  export class PresidenteService{

    constructor(
        private servicePresidente: GeneralService
    ){}

    getExpendient(): Observable<Expedient[]>{
        return this.servicePresidente.getData<Expedient[]>(environment.API_SGE_TRI,`Files/Tributario`);
    }

  }
