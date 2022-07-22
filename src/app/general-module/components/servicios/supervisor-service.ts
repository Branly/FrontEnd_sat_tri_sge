import { Diary } from './../interfaces/Secretario'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { GeneralService } from './general.service'

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
  constructor (private ServiceSupervisor: GeneralService) {}

  setStateSpecialistReview (noFile: String): Observable<String> {
    return this.ServiceSupervisor.putData<String, String>(
      environment.API_IFI_SIPF,
      `Files/StateSpecialistReview/${noFile}`
    )
  }

  setStateProfessionalCorrection (file:String): Observable<String>{
    return this.ServiceSupervisor.putData<String, String>(environment.API_IFI_SIPF,`Files/StateProfessionalCorrection/${file}`)
  }

}
