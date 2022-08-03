import { Diary } from './../interfaces/Secretario';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { GeneralService } from './general.service';
import { createDiary} from './../interfaces/Secretario';
import { Expedient} from './../interfaces/Recepcion';


@Injectable({
    providedIn: 'root'
  })
  export class SecretarioService{

    constructor(
        private serviceSecretario: GeneralService
    ){}

    getDiary(tipo: number): Observable<Diary[]>{
        return this.serviceSecretario.getData<Diary[]>(
          environment.API_IFI_SIPF,
          `Diary/${tipo}`);
    }

    getExpendient(nit:String): Observable<Expedient[]>{
      return this.serviceSecretario.getData<Expedient[]>(environment.API_IFI_SIPF,`Files/Files/${nit}/37`);
  }
  
    setDiary (newDiary: createDiary): Observable<createDiary> {
       return this.serviceSecretario.postData<createDiary, Object>(
          environment.API_IFI_SIPF + `/Diary/NewDiary/`,
             newDiary
    )
  }

  
  setState(file: String): Observable<String>{
    return this.serviceSecretario.putData<String, String>(environment.API_IFI_SIPF,`/Files/StateInformationComfirmation/${file}`)
  }

  }
