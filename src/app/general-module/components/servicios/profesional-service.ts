import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Expedient, InformationExpedient } from './../interfaces/Recepcion';
import { Injectable } from "@angular/core";
import { GeneralService } from './general.service';

@Injectable({
    providedIn: 'root'
  })
  export class ProfesionaleService{

    constructor(
        private serviceProfesional: GeneralService
    ){}

    getExpendients(): Observable<Expedient[]>{
        return this.serviceProfesional.getData<Expedient[]>(environment.API_IFI_SIPF,`Files/Files/23842353/28, 30, 31`);
    }

    getExpendient(file:String): Observable<InformationExpedient>{
      return this.serviceProfesional.getData<InformationExpedient>(environment.API_IFI_SIPF,`Files/informationProfessional/${file}`);
  }

  }
