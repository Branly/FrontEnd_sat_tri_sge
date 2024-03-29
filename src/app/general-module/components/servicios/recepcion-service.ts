import { Data } from './../interfaces/centralizador';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { Expedient, createExpedient, Loan} from './../interfaces/Recepcion'
import { Injectable } from '@angular/core'
import { GeneralService } from './general.service'

@Injectable({
  providedIn: 'root'
})
export class RecepcionService {
  constructor (private serviceRecepcion: GeneralService) {}

  getExpendient (): Observable<Expedient[]> {
    return this.serviceRecepcion.getData<Expedient[]>(
      environment.API_SGE_TRI,
      `Files/Receptionist`
    )
  }

  setExpedient (newExpediente: createExpedient): Observable<createExpedient> {
    return this.serviceRecepcion.postData<createExpedient, Object>(
      environment.API_SGE_TRI + `/Files/File/`,
      newExpediente
    )
  }

  setLoan (newLoan: Loan): Observable<Loan> {
    return this.serviceRecepcion.postData<Loan, Object>(
      environment.API_SGE_TRI + `/Files/Loan/`,
      newLoan
    )
  }

  getType(tipo: Number): Observable<Data[]>{
    return this.serviceRecepcion.getData<Data[]>(environment.API_SGE_TRI,`CatData/${tipo}`);
  }

  getObservation(): Observable<Data[]>{
    return this.serviceRecepcion.getData<Data[]>(environment.API_SGE_TRI,`CatData/Observation`);
  }


  setState(file: String): Observable<String>{
    return this.serviceRecepcion.putData<String, String>(environment.API_SGE_TRI,`/Files/StateInformationComfirmation/${file}`)
  }

}
