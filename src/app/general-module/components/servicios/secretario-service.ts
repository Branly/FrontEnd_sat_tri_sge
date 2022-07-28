import { Diary } from './../interfaces/Secretario';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { GeneralService } from './general.service';

@Injectable({
    providedIn: 'root'
  })
  export class SecretarioService{

    constructor(
        private serviceSecretario: GeneralService
    ){}

    getDiary(tipo: Number): Observable<Diary[]>{
        return this.serviceSecretario.getData<Diary[]>(environment.API_IFI_SIPF,`Diary/${tipo}`);
    }

  }
