import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Expedient, InformationExpedient } from './../interfaces/Recepcion';
import { Injectable } from "@angular/core";
import { GeneralService } from './general.service';
import { Providens } from '../interfaces/profesional';

@Injectable({
    providedIn: 'root'
  })
  export class ProfesionaleService{

    constructor(
        private serviceProfesional: GeneralService
    ){}

    getExpendients(): Observable<Expedient[]>{
        return this.serviceProfesional.getData<Expedient[]>(environment.API_IFI_SIPF,`Files/Files/105259977/28, 30, 31`);
    }

    getExpendient(file:String): Observable<InformationExpedient>{
      return this.serviceProfesional.getData<InformationExpedient>(environment.API_IFI_SIPF,`Files/informationProfessional/${file}`);
  }

  setProvidens(newProvidens:Providens): Observable<Providens>{
    return this.serviceProfesional.postData<Providens, Providens>(`${environment.API_IFI_SIPF}/Providens/create`, newProvidens);
  }

  setProvidensExpedient(newProvidens:Providens): Observable<Providens>{
    return this.serviceProfesional.postData<Providens, Object>(`${environment.API_IFI_SIPF}/Providens/ExpedientProvidens`, newProvidens);
  }


  setElaborateProvidens(file:String): Observable<String>{
    return this.serviceProfesional.putData<String, String>(environment.API_IFI_SIPF,`/Files/StateElaborateProvidence/${file}`)
  }

  }
