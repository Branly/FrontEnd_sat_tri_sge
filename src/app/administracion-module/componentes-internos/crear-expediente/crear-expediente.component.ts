import { Data } from './../../../general-module/components/interfaces/centralizador'
import { createExpedient } from './../../../general-module/components/interfaces/Recepcion'
import { RecepcionService } from './../../../general-module/components/servicios/recepcion-service'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-crear-expediente',
  templateUrl: './crear-expediente.component.html',
  styleUrls: ['./crear-expediente.component.scss']
})
export class CrearExpedienteComponent implements OnInit {
  mostrarFechas: boolean = true
  crearExp!: FormGroup
  recursos: Data[] = [
    { codigo: 9, nombre: 'Revocatoria' },
    { codigo: 10, nombre: 'Apelación' }
  ]
  management: Data[] = []

  constructor (
    public dialogRef: MatDialog,
    private RecepcionService: RecepcionService
  ) {
    this.crearExp = new FormGroup({
      Nit: new FormControl('', Validators.required),
      cantidadAjustes: new FormControl('', Validators.required),
      direccionFiscal: new FormControl('', Validators.required),
      folios: new FormControl('', Validators.required),
      idGerenciaOrigen: new FormControl('', Validators.required),
      nitContribuyente: new FormControl('', Validators.required),
      noExpediente: new FormControl('', Validators.required),
      tipoRecurso: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      recurso: new FormControl('', Validators.required)
    })
  }

  onNoClick (): void {
    this.dialogRef.closeAll()
  }

  ngOnInit (): void {
    this.getManagement()
  }

  getRecursed (recursed: any) {
    this.crearExp.get('tipoRecurso')?.setValue(recursed.source.selected.value)
  }

  createExpedient () {
    var newExpdiente: createExpedient = {
      cantidadAjustes: this.crearExp.get('cantidadAjustes')?.value,
      direccionFiscal: this.crearExp.get('direccionFiscal')?.value,
      fechaIngreso: new Date(),
      fechaModifica: new Date(),
      fechaPreincripcion: new Date(),
      folios: this.crearExp.get('folios')?.value,
      idGerenciaOrigen: this.crearExp.get('idGerenciaOrigen')?.value,
      idAgenda: '',
      idEstado: 7,
      idProces: 22,
      ipModifica: '',
      nitContribuyente: this.crearExp.get('nitContribuyente')?.value,
      nitProfesional: '',
      noExpediente: this.crearExp.get('noExpediente')?.value,
      noExpedienteTributa: '',
      tipoRecurso: this.crearExp.get('tipoRecurso')?.value,
      usuarioModifica: '',
      resolucionEntrada: this.crearExp.get('recurso')?.value
    }
    console.log(newExpdiente)
    this.RecepcionService.setExpedient(newExpdiente)
      .toPromise()
      .then(res => {
        this.RecepcionService.setState(res.noExpedienteTributa)
          .toPromise()
          .then(re => console.log(res));
          this.onNoClick();
      })
  }

  getManagement () {
    this.RecepcionService.getType(13)
      .toPromise()
      .then(res => {
        this.management = res
      })
  }
  saveManagement (management: any) {
    this.crearExp.get('idGerenciaOrigen')?.setValue(management.source.selected.value);
  }
}
