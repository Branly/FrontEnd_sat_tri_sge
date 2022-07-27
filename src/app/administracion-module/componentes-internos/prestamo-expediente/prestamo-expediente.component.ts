import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Loan } from './../../../general-module/components/interfaces/Recepcion';
import { RecepcionService } from './../../../general-module/components/servicios/recepcion-service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Data } from './../../../general-module/components/interfaces/centralizador'

export interface DataIn {
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
  styleUrls: ['./prestamo-expediente.component.scss']
})
export class PrestamoExpedienteComponent implements OnInit {

  gerencias: Infrmation[] = [];
  crearPrestamo!: FormGroup;
  management: Data[] = []
  selectedFiles:any;
  name:  String = "";
  constructor(public dialogRef: MatDialogRef<PrestamoExpedienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataIn,
    private RecepcionService: RecepcionService
  ) {
    this.crearPrestamo = new FormGroup({
      Nit: new FormControl('', Validators.required),
      comentario: new FormControl('', Validators.required),
      departamento: new FormControl('', Validators.required),
      gerencia: new FormControl('', Validators.required),
      nitSolicitante: new FormControl('', Validators.required),
      noExpedienteTributa: new FormControl('', Validators.required)
    })
  }



     onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data);
  }

  ngOnInit(): void {
    this.getManagement();
  }


  createLoan() {
    var newLoan: Loan = {
      comentario: this.crearPrestamo.get("cantidadAjustes")?.value,
      departamento: this.crearPrestamo.get("cantidadAjustes")?.value,
      fechaEntrada: new Date(),
      fechaModifica: new Date(),
      fechaSalida: new Date(),
      gerencia: this.crearPrestamo.get("cantidadAjustes")?.value,
      idPrestamo: 0,
      ipModifica: "",
      nitSolicitante: this.crearPrestamo.get("cantidadAjustes")?.value,
      noExpedienteTributa: this.crearPrestamo.get("cantidadAjustes")?.value,
      usuarioModifica: ""
    }
    this.RecepcionService.setLoan(newLoan)
      .toPromise()
      .then(res => {
        console.log(res)
      })
  }
  getManagement () {
    this.RecepcionService.getType(13)
      .toPromise()
      .then(res => {
        this.management = res
      })
  }

  selectFile(event:any) {
    console.log(event);
    try {
      this.selectedFiles = event.target.files;
      this.name = this.selectedFiles.item(0).name;
    } catch (error) {
      console.log(error)
      this.name = "";
    }


}

}
