import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-crear-agenda',
  templateUrl: './crear-agenda.component.html',
  styleUrls: ['./crear-agenda.component.scss']
})
export class CrearAgendaComponent implements OnInit {

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
   * @description cerrar ventana flotante creacion de Agenda
   * @author  (Anderson Suruy)
   * @since 26/07/2022
   */
  onNoClick (): void {
    this.dialogRef.closeAll()
  }

  ngOnInit() {
  }

}
