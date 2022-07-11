import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Data {
  usuario: string;
  gerencia: string;
  departamento: string;
  comentarios: string;
  noExpedienteTributa: string;
}

interface Infrmation{
  value: number;
  name: string;
}

@Component({
  selector: 'app-prestamo-expediente',
  templateUrl: './prestamo-expediente.component.html',
  styleUrls: ['./prestamo-expediente.component.css']
})
export class PrestamoExpedienteComponent implements OnInit {

  gerencias: Infrmation[] = [

  ];

  constructor(public dialogRef: MatDialogRef<PrestamoExpedienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
  ) { }



     onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data);
  }

  ngOnInit(): void {
  }

}
