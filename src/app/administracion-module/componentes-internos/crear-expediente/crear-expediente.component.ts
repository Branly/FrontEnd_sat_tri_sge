import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Data {
  noExpediente: string;
  tipoRecurso: number;
  nombre: string;
  nit: string;
  fechaIngreso: Date;
  gerenciaOrigen: string;
  folios: number;
  resolucion: string;
  direccion: string;
  ajustes: number;
}

interface TipoRecurso {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crear-expediente',
  templateUrl: './crear-expediente.component.html',
  styleUrls: ['./crear-expediente.component.css']
})
export class CrearExpedienteComponent implements OnInit {

  recursos: TipoRecurso[] = [
    {value: '9', viewValue: 'Rebocatoria'},
    {value: '10', viewValue: 'Apelación'},
  ];

  constructor( public dialogRef: MatDialogRef<CrearExpedienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data);
  }

  ngOnInit(): void {
  }

}

