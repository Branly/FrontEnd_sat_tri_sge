import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-archivos-agenda',
  templateUrl: './archivos-agenda.component.html',
  styleUrls: ['./archivos-agenda.component.scss']
})
export class ArchivosAgendaComponent implements OnInit {

  crearAgenda: FormGroup;

  constructor(public dialogRef: MatDialog) { 

    {
      this.crearAgenda = new FormGroup({
        asuntoAgenda: new FormControl('', Validators.required),
        fecha: new FormControl('', Validators.required)
      })
    }

  }
  
   /**
   * @description cerrar ventana flotante para descarga de archivos de agenda
   * @author  (Anderson Suruy)
   * @since 26/07/2022
   */
  onNoClick (): void {
    this.dialogRef.closeAll()
  }

  ngOnInit() {
  }

}
