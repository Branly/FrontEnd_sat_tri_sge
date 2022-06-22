import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDynamicFormModule } from 'mat-dynamic-form';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MaterialModule } from '../material.module';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { BadRequestComponent } from './components/bad-request/bad-request.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AlertDialogComponent,
    SnackbarComponent,
    BadRequestComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxExtendedPdfViewerModule,
    MatDynamicFormModule,
  ],
  exports: [
    MatDynamicFormModule,
  ]
})
export class GeneralModule { }
