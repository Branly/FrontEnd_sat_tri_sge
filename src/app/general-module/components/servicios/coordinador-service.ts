import { Professional } from './../interfaces/coordinador';
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
        return this.serviceCoordinador.getData<Expedient[]>(environment.API_SGE_TRI,`Files/Coordinator`);
    }

    getProfessional(rol:Number, tipo:String): Observable<Professional[]>{
      return this.serviceCoordinador.getData<Professional[]>(environment.API_SGE_TRI,`colaborators/CollaboratorRole/${rol}/${tipo}`);
    }

    setAssignment(nit:String, file:String): Observable<Professional>{
      return this.serviceCoordinador.putData<Professional, Professional>(environment.API_SGE_TRI,`/Files/manualAssignment/${file}/${nit}`)
    }

  }
