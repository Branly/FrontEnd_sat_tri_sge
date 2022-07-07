import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Expedient } from './../interfaces/Recepcion';
import { Injectable } from "@angular/core";
import { GeneralService } from './general.service';

@Injectable({
    providedIn: 'root'
  })
  export class ProfesionaleService{

    constructor(
        private serviceProfesional: GeneralService
    ){}

    getExpendient(): Observable<Expedient[]>{
        return this.serviceProfesional.getData<Expedient[]>(environment.API_IFI_SIPF,`Files/Files/12345678/28, 30, 31`);
    }

  }
