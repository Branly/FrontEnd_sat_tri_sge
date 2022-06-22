import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { CustomNode, FormStructure } from 'mat-dynamic-form';
import { BadRequestComponent } from 'src/app/general-module/components/bad-request/bad-request.component';
import { DialogService } from 'src/app/general-module/components/servicios/dialog.service';
import { ErrorMapper } from './error-mapper';
import { ErrorResponse } from './error-response';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector,
    private ngZone: NgZone
  ) { }

  handleError(error: Error) {
    const dialog = this.injector.get(DialogService);
    console.error(error);

    if (!(error instanceof Error)) return;

    try {
      const httperror = JSON.parse(error.message.replace("Uncaught (in promise): HttpErrorResponse: ", "").replace("Uncaught (in promise): x: ", ""))
      const errorResponse: ErrorResponse = httperror.error;
      const errorMessage = errorResponse.userMessage || ErrorMapper.HTTP_ERROR_MAP[httperror.status];
      if (httperror.status == 400) {
        this.ngZone.run(() => {
          dialog.show({
            title: `SGE-${this.zFill(httperror.status, 3)}`,
            text: errorMessage,
            icon: 'warning',
            showConfirmButton: false,
            disableClose: false,
            width: '60%',
            formStructure: this.createFormStructure(errorResponse)
          });
        });
      } else {
        this.ngZone.run(() => {
          dialog.show({
            title: `SGE-${this.zFill(httperror.status, 3)}`,
            text: errorMessage,
            icon: 'error',
            showConfirmButton: true,
            disableClose: false,
          });
        });
      }
    } catch (error) {
      this.ngZone.run(() => {
        dialog.show({
          title: `SGE-001`,
          text: "Ocurrió un error inesperado",
          icon: 'error',
          showConfirmButton: true,
          disableClose: false,
        });
      });
    }
  }

  zFill(number: number, width: number) {
    return '0'.repeat(width - number.toString().length) + number;
  }

  createFormStructure(error: ErrorResponse): FormStructure {
    const formStructure = new FormStructure();
    formStructure.showTitle = false;

    formStructure.nodes = [
      new CustomNode<BadRequestComponent>("bad-request", BadRequestComponent, {
        error: error
      }).apply({
        singleLine: true
      })
    ];

    return formStructure;
  }
}