import { Professional } from './../interfaces/coordinador';
import { Data } from './../interfaces/centralizador';
import { Group, CreateGroup, Collaborator, CreateSupervisor, DeleteProfessional } from './../interfaces/gestion';
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

    getType(tipo: Number): Observable<Data[]>{
      return this.serviceGestion.getData<Data[]>(environment.API_IFI_SIPF,`CatData/${tipo}`);
    }


    getCollaborator(puesto: Number, tipo: Number): Observable<Professional[]>{
      return this.serviceGestion.getData<Professional[]>(environment.API_IFI_SIPF,`/colaborators/CollaboratorNotGroup/${puesto}/${tipo}`);
    }

    newGroup(group: CreateGroup): Observable<CreateGroup>{
      return this.serviceGestion.postData<CreateGroup, CreateGroup>(environment.API_IFI_SIPF+`/WorkGroup/Group/`,group);
    }

    getSupervisorGroup(grupo:Number): Observable<Collaborator[]>{
      return this.serviceGestion.getData<Collaborator[]>(environment.API_IFI_SIPF,`colaborators/supervisorGroup/${grupo}`);
    }

    getProfessionalGroup(nit:String): Observable<Collaborator[]>{
      return this.serviceGestion.getData<Collaborator[]>(environment.API_IFI_SIPF,`colaborators/professionalGroup/${nit}`);
    }

    newSupervisor(group: CreateSupervisor): Observable<CreateSupervisor>{
      return this.serviceGestion.postData<CreateSupervisor, CreateSupervisor>(environment.API_IFI_SIPF+`/WorkGroup/Group/Member`,group);
    }

    deleteWorkGroup(id: number): Observable<Object> {
      return this.serviceGestion.deleteData<Object>(`${environment.API_IFI_SIPF}/WorkGroup/Delete/${id}`);
    }

    deleteProfessional(nit:String, grupo:Number): Observable<Object> {
      return this.serviceGestion.deleteData<Object>(`${environment.API_IFI_SIPF}/WorkGroup/Delete/Member/${nit}/${grupo}`);
    }

    deleteSupervisor(nit:String, grupo:Number): Observable<Object> {
      return this.serviceGestion.deleteData<Object>(`${environment.API_IFI_SIPF}/WorkGroup/Delete/Supervisor/${nit}/${grupo}`);
    }
  }
