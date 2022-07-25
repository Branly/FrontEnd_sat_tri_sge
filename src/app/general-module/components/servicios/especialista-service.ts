import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Expedient } from './../interfaces/Recepcion';
import { Injectable } from "@angular/core";
import { GeneralService } from './general.service';

@Injectable({
    providedIn: 'root'
  })
  export class EspecialistaService{

    constructor(
        private serviceEspecialista: GeneralService
    ){}

    setStatePonent(file:String): Observable<String>{
      return this.serviceEspecialista.putData<String, String>(environment.API_IFI_SIPF,`/Files/StatePonent/${file}`)
    }

    setStateSupervisorCorrection(file:String): Observable<String>{
      return this.serviceEspecialista.putData<String, String>(environment.API_IFI_SIPF,`/Files/StateSupervisorCorrection/${file}`)
    }

    setStatePendingDiary(file:String): Observable<String>{
      return this.serviceEspecialista.putData<String, String>(environment.API_IFI_SIPF,`/Files/StatePendingDiary/${file}`)
    }

    setStateResolutionCreation(file:String): Observable<String>{
      return this.serviceEspecialista.putData<String, String>(environment.API_IFI_SIPF,`/Files/StateResolutionCreation/${file}`)
    }
  }


