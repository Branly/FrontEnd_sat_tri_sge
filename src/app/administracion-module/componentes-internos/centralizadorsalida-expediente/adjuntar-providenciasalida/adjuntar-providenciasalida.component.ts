import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-adjuntar-providenciasalida',
  templateUrl: './adjuntar-providenciasalida.component.html',
  styleUrls: ['./adjuntar-providenciasalida.component.scss']
})
export class AdjuntarProvidenciasalidaComponent implements OnInit {

  adjuntarProvidenciasalida: FormGroup;

  constructor(public dialogRef: MatDialog) { 
    {
      this.adjuntarProvidenciasalida = new FormGroup({
        providenciaSalida: new FormControl('', Validators.required),
      })
    }
  }

  ngOnInit() {
  }

  onNoClick (): void {
    this.dialogRef.closeAll()
  }

}
