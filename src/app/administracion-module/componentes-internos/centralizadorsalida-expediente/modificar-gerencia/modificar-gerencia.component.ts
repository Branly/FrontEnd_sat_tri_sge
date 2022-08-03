import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modificar-gerencia',
  templateUrl: './modificar-gerencia.component.html',
  styleUrls: ['./modificar-gerencia.component.scss']
})
export class ModificarGerenciaComponent implements OnInit {

  modificarGerencia: FormGroup;

  constructor(public dialogRef: MatDialog) {
    {
      this.modificarGerencia = new FormGroup({
        noExpediente: new FormControl('', Validators.required),
        cedula: new FormControl('', Validators.required)
      })
    }
   }

  

  onNoClick (): void {
    this.dialogRef.closeAll()
  }

  ngOnInit() {
  }

}
