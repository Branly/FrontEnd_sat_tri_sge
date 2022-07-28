import { Group } from './../interfaces/gestion';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { GeneralService } from './general.service';

@Injectable({
    providedIn: 'root'
  })
  export class GestionService{

    constructor(
        private serviceGestion: GeneralService
    ){}

    getGroup(): Observable<Group[]>{
        return this.serviceGestion.getData<Group[]>(environment.API_IFI_SIPF,`WorkGroup`);
    }

  }
