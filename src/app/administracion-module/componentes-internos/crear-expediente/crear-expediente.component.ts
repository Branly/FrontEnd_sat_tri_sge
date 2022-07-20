import { createExpedient } from './../../../general-module/components/interfaces/Recepcion';
import { RecepcionService } from './../../../general-module/components/servicios/recepcion-service'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { FormControl, FormGroup, Validators } from '@angular/forms';


interface TipoRecurso {
  value: string
  viewValue: string
}

@Component({
  selector: 'app-crear-expediente',
  templateUrl: './crear-expediente.component.html',
  styleUrls: ['./crear-expediente.component.scss']
})
export class CrearExpedienteComponent implements OnInit {
  mostrarFechas: boolean = true
  crearExp!: FormGroup;
  recursos: TipoRecurso[] = [
    { value: '9', viewValue: 'Rebocatoria' },
    { value: '10', viewValue: 'Apelación' }
  ]

  constructor (
    public dialogRef: MatDialog,
    private RecepcionService: RecepcionService
  ) {
    this.crearExp = new FormGroup({
      Nit: new FormControl('', Validators.required),
      cantidadAjustes: new FormControl('', Validators.required),
      direccionFiscal: new FormControl('', Validators.required),
      fechaIngreso: new FormControl('', Validators.required),
      folios: new FormControl('', Validators.required),
      gerenciaOrigen: new FormControl('', Validators.required),
      nitContribuyente: new FormControl('', Validators.required),
      noExpediente: new FormControl('', Validators.required),
      tipoRecurso: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      recurso: new FormControl('', Validators.required)
    })
  }

  onNoClick (): void {
    this.dialogRef.closeAll();
  }

  ngOnInit (): void {}

  getRecursed(recursed: any){
    this.crearExp.get("tipoRecurso")?.setValue(recursed.source.selected.value);
  }

  createExpedient () {
    var newExpdiente: createExpedient = {
      cantidadAjustes: this.crearExp.get("cantidadAjustes")?.value,
      direccionFiscal: this.crearExp.get("direccionFiscal")?.value,
      fechaIngreso: this.crearExp.get("fechaIngreso")?.value,
      fechaModifica: new Date(),
      fechaPreincripcion: new Date(),
      folios: this.crearExp.get("folios")?.value,
      gerenciaOrigen: this.crearExp.get("gerenciaOrigen")?.value,
      idAgenda: "",
      idEstado: 7,
      idProces: 22,
      ipModifica: "",
      nitContribuyente: this.crearExp.get("nitContribuyente")?.value,
      nitProfesional: "",
      noExpediente: this.crearExp.get("noExpediente")?.value,
      noExpedienteTributa: "",
      tipoRecurso: this.crearExp.get("tipoRecurso")?.value,
      usuarioModifica: ""
    }
    this.RecepcionService.setExpedient(newExpdiente)
      .toPromise()
      .then(res => {
        console.log(res)
      })
  }
}
