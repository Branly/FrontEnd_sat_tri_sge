import { FileUtils } from './../../../general-module/components/util/file-utils'
import { DocumentosExpedienteService } from './../../../general-module/components/servicios/documentos-expediente-service'
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
  crearExp!: FormGroup;
  recursos: Data[] = [
    { codigo: 9, nombre: 'Revocatoria' },
    { codigo: 10, nombre: 'Apelación' }
  ]
  management: Data[] = []
  rechazo: Boolean = false;
  observation: Data[] = [];
  constructor (
    public dialogRef: MatDialog,
    private RecepcionService: RecepcionService,
    private DocumentosExpedienteService: DocumentosExpedienteService
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

  /**
   * @description Cierra la ventana flotante
   * @author acdraguay (Cristian Raguay)
   * @since 13/07/2022
   */
  onNoClick (): void {
    this.dialogRef.closeAll()
  }

  ngOnInit (): void {
    this.getManagement()
  }

  /**
   * @description Obtiene el id del Seleccionable del Tipo de Recurso
   * @author acdraguay (Cristian Raguay)
   * @since 13/07/2022
   */
  getRecursed (recursed: any) {
    this.crearExp.get('tipoRecurso')?.setValue(recursed.source.selected.value)
  }

      /**
   * @description Crea un Expediente en la BDD
   * @author acdraguay (Cristian Raguay)
   * @since 13/07/2022
   */
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
      resolucionEntrada: this.crearExp.get('recurso')?.value,
      nombre: this.crearExp.get('nombre')?.value
    }
    console.log(newExpdiente)
    this.RecepcionService.setExpedient(newExpdiente)
      .toPromise()
      .then(res => {
        this.RecepcionService.setState(res.noExpedienteTributa)
          .toPromise()
          .then(re => console.log(res))
        this.onNoClick()
      })
  }


      /**
   * @description Se obtiene las gerencias disponibles en la BDD
   * @author acdraguay (Cristian Raguay)
   * @since 13/07/2022
   */
  getManagement () {
    this.RecepcionService.getType(13)
      .toPromise()
      .then(res => {
        this.management = res
      })
  }

  getObservation(){
    this.RecepcionService.getObservation()
      .toPromise()
      .then(res => {
        this.observation = res
      })
  }
      /**
   * @description Obtiene el id del seleccionable de gerencias
   * @author acdraguay (Cristian Raguay)
   * @since 13/07/2022
   */
  saveManagement (management: any) {
    this.crearExp
      .get('idGerenciaOrigen')
      ?.setValue(management.source.selected.value)
  }

  async getRejection () {
    await this.createExpedient()
    this.DocumentosExpedienteService.getRejection(
      this.crearExp.value.noExpediente
    ).subscribe(data => {
      FileUtils.downloadFile(
        data,
        `Boleta de Rechazo ${this.crearExp.value.noExpediente}.docx`
      )
    })
  }

  showObservation(){
    this.getObservation();
    this.rechazo = !this.rechazo;
  }
}
