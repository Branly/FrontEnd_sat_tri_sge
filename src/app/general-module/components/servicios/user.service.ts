import { EmpleadoProsis } from './../interfaces/empleado-prosis.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, UserLogged, UserRole } from '../interfaces/user.interface';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_GENERAL = environment.API_GENERAL;
  API_RTU = environment.API_RTU;
  API_RUF = environment.API_RUF;
  API_SGET = environment.API_SGE_TRI;

  constructor(private generalServices: GeneralService) { }

  getUserLogged(): Observable<UserLogged> {
    if (sessionStorage.getItem('userLogged')) {
      return of(JSON.parse(sessionStorage.getItem('userLogged')!));
    }
    return this.generalServices.getData<UserLogged>(`${this.API_SGET}/users/logged`).pipe(
      map(user => {
        sessionStorage.setItem('userLogged', JSON.stringify(user));
        return user;
      })
    )
  }

  getUserInfo(id: string): Observable<User> {
    return this.generalServices.getData<User>(`${this.API_SGET}/users/${id}`);
  }

  getUserRoles(type: string, login?: string): Observable<UserRole[]> {
    return this.generalServices.getData<UserRole[]>(`${this.API_SGET}/roles/${type}`, login ? [{ login }] : []);
  }

  obtenerInfoGeneralByNIT(nit: string): Observable<EmpleadoProsis> {
    return this.generalServices.getData<EmpleadoProsis>(`${this.API_RUF}/empleados/consulta/prosis/nit`, nit);
  }

}
