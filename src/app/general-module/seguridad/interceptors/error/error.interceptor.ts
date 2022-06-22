import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, finalize } from 'rxjs/operators';
import { CallbackOauth2Component } from '../../callback-oauth2/callback-oauth2.component';
import { BlockUiService } from 'src/app/general-module/components/servicios/block-ui.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private blockUI: BlockUiService
  ) { }

  /**
   * Interceptor para ventana de espera de respuesta de la petición
   * y manejo de mensajes de error
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.blockUI.block();
    return next.handle(request).pipe(
      finalize(() => {
        this.blockUI.unblock();
      }),
      delay(100),
      catchError((htterror: HttpErrorResponse) => {
        /**
           * Cuando el error es por token invalido se debe a que la sesión fue cerrada o el token expiró
           * Se limpia la información del token y se redirecciona para volver al guard y obtener nuevo token
           */
        if (htterror.status === 401
          && htterror.error
          && htterror.error.error
          && htterror.error.error === "invalid_token"
          && sessionStorage.getItem("guard")
          && sessionStorage.getItem("guard") === "Authorization") {
          CallbackOauth2Component.cleanStorageToken();
          window.location.href = window.location.href;
          this.blockUI.unblock();
        }
        return throwError(htterror);
      })
    ) as Observable<HttpEvent<any>>;
  };
}
