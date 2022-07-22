import { Complement } from './../../../general-module/components/interfaces/centralizador'
import { element } from 'protractor'
import {
  Expedient,
  InformationExpedient
} from './../../../general-module/components/interfaces/Recepcion'
import { CentralizadorService } from './../../../general-module/components/servicios/centralizador-service'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSelectChange } from '@angular/material/select'
import { ProfesionaleService } from './../../../general-module/components/servicios/profesional-service'

interface Data {
  codigo: number
  nombre: string
}

interface DataImpost {
  codigo: number
  nombre: string
  monto: number
}

@Component({
  selector: 'app-centralizadorentrada-expediente',
  templateUrl: './centralizadorentrada-expediente.component.html',
  styleUrls: ['./centralizadorentrada-expediente.component.css']
})
export class CentralizadorentradaExpedienteComponent implements OnInit {
  mostrarTablaPadre: boolean = false
  detalle: boolean = false

  impost: string = ''
  idImpost: number = 0
  mont: number = 0

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
    no_expediente_tributa: '',
    idCasoEspecial: 0,
    monto: 0,
    nombre: ''
  }

  info: Expedient[] = []
  /*  data: Expedient = {
    no_expediente_tributa: "",
    tipo_recurso: "",
    nit_contribuyente: "",
    gerencia_origen: "",
    direccion_fiscal: "",
    no_expediente: "",
    folios: 0,
    cantidad_ajustes: 0,
    fecha_ingreso: new Date(),
    nombre: "",
    obsevacion: "",
    recurso: "",
    tipo_caso: 0,
    subTipo_caso: 0,
    estado: "",
    observacion: ""
}; */

  displayedColumns: string[] = [
    'nombre',
    'nit',
    'fecha_ingreso',
    'no_expediente_tributa',
    'fecha_preincripcion',
    'estado',
    'profesional',
    'acciones'
  ]
  dataSource = new MatTableDataSource()
  DisplayImpost: string[] = ['impuesto', 'monto', 'acciones']
  dataImpost = new MatTableDataSource()

  especial: Data[] = [
    { codigo: 13, nombre: 'Si' },
    { codigo: 14, nombre: 'No' }
  ]

  tipo: Data[] = []
  subTipo: Data[] = []
  impuesto: Data[] = []
  currentImpost: DataImpost[] = []

  @ViewChild('MatPaginator1') set matPaginator (mp1: MatPaginator) {
    this.dataSource.paginator = mp1
  }

  constructor (
    private CentralizadorService: CentralizadorService,
    private ProfesionaleService: ProfesionaleService
  ) {}

  ngOnInit (): void {
    this.Expedient()
    this.newType()
    this.impostType()
    this.dataImpost.data = this.currentImpost
  }

  Expedient () {
    this.CentralizadorService.getExpendient('87634457')
      .toPromise()
      .then(res => {
        this.dataSource.data = res
      })
  }

  showInformation () {
    this.mostrarTablaPadre = !this.mostrarTablaPadre
  }
  newType () {
    this.CentralizadorService.getType(7)
      .toPromise()
      .then(res => {
        this.tipo = res
      })
  }

  newSubType (tipo: MatSelectChange) {
    this.CentralizadorService.getSubType(tipo.value)
      .toPromise()
      .then(res => {
        this.subTipo = res
      })
    this.file.tipo_caso = tipo.value
  }

  getSubType (subType: MatSelectChange) {
    this.file.subTipo_caso = subType.value
  }

  getCase (caso: MatSelectChange) {
    this.file.idCasoEspecial = caso.value
  }

  impostType () {
    this.CentralizadorService.getType(9)
      .toPromise()
      .then(res => {
        this.impuesto = res
      })
  }

  /* informationExpedient(expedient: String){
    this.CentralizadorService.getInformation(expedient).toPromise().then(res => {
      this.info[0] = res[0];
      //console.log(res);
    });
    console.log(this.info);
    this.pastToInformation();
    this.newComplement();
  } */

  saveImpost (impuesto: any) {
    this.impost = impuesto.source.selected.viewValue
    this.idImpost = impuesto.source.selected.value
  }

  save (monto: string) {
    this.currentImpost.push({
      codigo: this.idImpost,
      nombre: this.impost,
      monto: +monto
    })
    this.dataImpost.data = this.currentImpost
  }

  delete (name: string) {
    let aux: DataImpost[] = []
    this.currentImpost.forEach(elemet => {
      if (elemet.nombre != name) {
        aux.push({
          codigo: elemet.codigo,
          nombre: elemet.nombre,
          monto: elemet.monto
        })
      }
    })
    this.dataImpost.data = aux
    this.currentImpost = aux
    aux = []
  }

  /*   pastToInformation(){
    this.info.forEach(element => this.data = element)
    console.log(this.data)
  } */
  button () {
    console.log(this.info)
  }

  expedient (noExedient: String) {
    this.ProfesionaleService.getExpendient(noExedient)
      .toPromise()
      .then(res => {
        this.file = res
        this.file.no_expediente_tributa = noExedient.toString()
        console.log(res)
        this.showInformation()
      })
  }

  newImpost () {
    this.currentImpost.forEach(element => {
      console.log(element)
      this.CentralizadorService.setImpost(
        element.codigo,
        element.monto,
        this.file.no_expediente_tributa
      )
        .toPromise()
        .then(data => {
          console.log(data)
        })

    })
  }

  newComplement () {
    if (this.currentImpost.length > 0) {
      var complement: Complement = {
        complejidad: 0,
        fechaInterposicion: this.file.fecha_interposicion,
        fechaModifica: new Date(),
        idCasoEspecial: this.file.idCasoEspecial,
        ipModifica: '22',
        nitColaboradorConfronto: '',
        noExpedienteTributa: this.file.no_expediente_tributa,
        subTipoCaso: +this.file.subTipo_caso,
        tipoCaso: +this.file.tipo_caso,
        usuarioModifica: ''
      }
      this.CentralizadorService.setComplement(complement)
        .toPromise()
        .then(data => console.log(data));
      this.newImpost();
      this.setState(complement.noExpedienteTributa);
      this.Expedient();
      this.showInformation();
    } else {
      alert('no Tiene Agregado ningun Impuesto')
    }
  }
  setState (noFile: String) {
    this.CentralizadorService.setProfessional(noFile)
      .toPromise()
      .then(res => {
        console.log(res)
      })
  }
}
