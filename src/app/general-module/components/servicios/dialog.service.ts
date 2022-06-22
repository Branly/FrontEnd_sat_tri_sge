import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { DialogOptions, DialogResult, SnackBarOptions } from '../interfaces/dialog.interface';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogRef?: MatDialogRef<AlertDialogComponent>;
  snabarRef?: MatSnackBarRef<SnackbarComponent>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  /**
   * Este método muestra un diálogo de alerta en base a las configuaracion proveidas en {@link options}.
   * 
   * Ejemplo de uso:
   * ```
   * ...
   * constructor(
   *   private dialog: DialogService,
   * ) {
   *    ...
   * }
   * 
   * this.dialog.show({
   *   title: 'Advertencia',
   *   text: 'Esta acción no se puede deshacer.',
   *   icon: 'warning',
   * })
   * ```
   * 
   * @author Carlos Ramos (crramosl)
   * @param options Son todas las posibles configuraciones ({@link DialogOptions}) del dialogo que se desea mostrar.
   * @returns Una promesa que se resuelve con el resultado del dialogo
   */
  public show(options: DialogOptions): Promise<DialogResult> {
    return new Promise((resolve, reject) => {
      this.dialogRef = this.dialog.open(AlertDialogComponent, {
        data: options,
        autoFocus: false,
        panelClass: 'dialog-panel',
        width: options.width,
        height: options.height,
        disableClose: options.disableClose
      });

      this.dialogRef.afterClosed().subscribe((result: DialogResult) => {
        resolve(result);
      });
    });
  }


  /**
   * Este método muestra una notificación en base a las configuaracion proveidas en {@link options}.
   * 
   * Ejemplo de uso:
   * ```
   * ...
   * constructor(
   *   private dialog: DialogService,
   * ) {
   *    ...
   * }
   * 
   * this.dialog.showSnackBar({
   *   title: 'Notificación',
   *   text: 'Ha recibido un nuevo mensaje.',
   *   icon: 'info',
   *   duration: 3000
   * })
   * ```
   * 
   * @author Carlos Ramos (crramosl)
   * @param options Son todas las posibles configuraciones ({@link SnackBarOptions}) de la notificación que se desea mostrar.
   * @returns Una promesa que se resuelve con el resultado de la notificación.
   */
  public showSnackBar(options: SnackBarOptions) {
    this.snabarRef = this.snackBar.openFromComponent(SnackbarComponent, {
      duration: options.duration,
      data: options,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'snackbar-panel'
    });
  }

  close(dialogResult?: DialogResult) {
    this.dialogRef?.close(dialogResult);
    this.snabarRef?.dismiss();

    this.dialogRef = undefined;
    this.snabarRef = undefined;
  }

  closeAll() {
    this.dialog?.closeAll();
    this.snackBar?.dismiss();
  }
}
