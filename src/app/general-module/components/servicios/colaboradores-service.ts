import { CreateCollaborator, UpdateCollaborator } from './../interfaces/Colaborador-interface';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { GeneralService } from './general.service';
import { Injectable } from "@angular/core";
import { ColaboradorFromProsis, Collaborators } from '../interfaces/Colaborador-interface';

@Injectable({
    providedIn: 'root'
})
export class ColaboradoresService {

    constructor(private GeneralService: GeneralService){}

    getCollaborators(): Observable<Collaborators[]>{
        return this.GeneralService.getData<Collaborators[]>(environment.API_SGE_TRI, 'colaborators');
    }

    getCollaboradorInfoByNit(pNit: string): Observable<ColaboradorFromProsis> {
        return this.GeneralService.getData<ColaboradorFromProsis>(environment.API_SGE_TRI,`collaborators/informacion/prosis/${pNit}`);
      }

    createCollaborator(collaborator: CreateCollaborator): Observable<Collaborators> {
        return this.GeneralService.postData<Collaborators, CreateCollaborator>(`${environment.API_SGE_TRI}/colaborators/Create`, collaborator);
    }

    updateCollaborator(id: string, collaborator: UpdateCollaborator): Observable<Collaborators> {
        return this.GeneralService.putData<Collaborators, UpdateCollaborator>(`${environment.API_SGE_TRI}/colaborators/Create`, id, collaborator);
    }

}
