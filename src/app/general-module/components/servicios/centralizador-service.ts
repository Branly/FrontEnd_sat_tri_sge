import { Data, Impost, Complement } from './../interfaces/centralizador';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Expedient } from './../interfaces/Recepcion';
import { Injectable } from "@angular/core";
import { GeneralService } from './general.service';

@Injectable({
    providedIn: 'root'
  })
  export class CentralizadorService{

    constructor(
        private serviceCentralizador: GeneralService
    ){}

    getExpendient(nit:String): Observable<Expedient[]>{
        return this.serviceCentralizador.getData<Expedient[]>(environment.API_IFI_SIPF,`Files/Files/${nit}/7`);
    }

    getType(tipo: Number): Observable<Data[]>{
      return this.serviceCentralizador.getData<Data[]>(environment.API_IFI_SIPF,`CatData/${tipo}`);
    }

    getSubType(tipo: Number): Observable<Data[]>{
      return this.serviceCentralizador.getData<Data[]>(environment.API_IFI_SIPF,`CatData/Sub/${tipo}`);
    }

    getInformation(tipo: String): Observable<Expedient[]>{
      return this.serviceCentralizador.getData<Expedient[]>(environment.API_IFI_SIPF,`Files/Verification/${tipo}`);
    }

    setImpost(idImpost:Number, monto:Number, file:String): Observable<Impost>{
      var newImpost: Impost ={
        fechaModifica: new Date(),
        ipModifica: "11",
        idIpmuesto: idImpost,
        monto: monto,
        noExpedienteTributa: file,
        usuarioModifica: "qq"
      }
      return this.serviceCentralizador.postData<Impost, Impost>(environment.API_IFI_SIPF+`/Files/FileTax/`,newImpost)
    }

    setComplement(newComplement:Complement): Observable<Complement>{
      return this.serviceCentralizador.postData<Complement, Complement>(environment.API_IFI_SIPF+`/Files/Complemnt/`,newComplement)
    }

    setProfessional(file:String): Observable<String>{
      return this.serviceCentralizador.putData<String, String>(environment.API_IFI_SIPF,`/Files/StatePendigAssignment/${file}`)
    }

  }
