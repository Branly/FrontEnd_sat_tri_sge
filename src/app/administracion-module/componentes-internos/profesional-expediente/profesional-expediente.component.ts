import { InformationExpedient } from './../../../general-module/components/interfaces/Recepcion'
import { ProfesionaleService } from './../../../general-module/components/servicios/profesional-service'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { formatDate } from '@angular/common'
import * as moment from 'moment'

@Component({
  selector: 'app-profesional-expediente',
  templateUrl: './profesional-expediente.component.html',
  styleUrls: ['./profesional-expediente.component.css']
})
export class ProfesionalExpedienteComponent implements OnInit {
  mostrarTablaPadre: Boolean = false
  file: InformationExpedient = {
    impuesto: '',
    estado: '',
    folios: 5,
    fecha_ingreso: new Date(),
    observacion: '',
    especialista: '',
    tipo_caso: '',
    tipo_recurso: '',
    profesional: '',
    recurso: '',
    no_expediente: '',
    id_agenda: '',
    nit_contribuyente: '',
    gerencia_origen: '',
    cantidad_ajustes: 0,
    fecha_preincripcion: new Date(),
    direccion_fiscal: '',
    fecha_interposicion: new Date(),
    subTipo_caso: '',
    no_expediente_tributa: ""
  }
  displayedColumns: string[] = [
    'noexpedientetributa',
    'nombrecontribuyente',
    'nit',
    'fechaingreso',
    'Tiempopreinscripcion',
    'estado',
    'profecional',
    'acciones'
  ]
  dataSource = new MatTableDataSource()

  @ViewChild('MatPaginator1') set matPaginator (mp1: MatPaginator) {
    this.dataSource.paginator = mp1
  }

  constructor (private ProfesionaleService: ProfesionaleService) {}

  ngOnInit (): void {
    this.Expedients()
  }

  Expedients () {
    this.ProfesionaleService.getExpendients()
      .toPromise()
      .then(res => {
        this.dataSource.data = res
      })
  }

  expedient (noExedient: String) {
    this.ProfesionaleService.getExpendient(noExedient)
      .toPromise()
      .then(res => {
        this.file.impuesto = res.impuesto
        this.file.estado = res.estado
        this.file.folios = res.folios
        this.file.fecha_ingreso = res.fecha_ingreso
        this.file.observacion = res.observacion
        this.file.tipo_caso = res.tipo_caso
        this.file.recurso = res.recurso
        this.file.no_expediente = res.no_expediente
        this.file.nit_contribuyente = res.nit_contribuyente
        this.file.cantidad_ajustes = res.cantidad_ajustes
        this.file.direccion_fiscal = res.direccion_fiscal
        this.file.fecha_interposicion = res.fecha_interposicion
        this.file.subTipo_caso = res.subTipo_caso
        this.file.gerencia_origen = res.gerencia_origen
        this.file.no_expediente_tributa = noExedient
      })
    console.log(this.file)
    this.viewInformation()
  }

  viewInformation () {
    this.mostrarTablaPadre = !this.mostrarTablaPadre
  }
}
