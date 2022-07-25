import { SupervisorService } from './../../../general-module/components/servicios/supervisor-service'
import { ProfesionaleService } from './../../../general-module/components/servicios/profesional-service'

import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Component, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-supervisor-expediente',
  templateUrl: './supervisor-expediente.component.html',
  styleUrls: ['./supervisor-expediente.component.css']
})
export class SupervisorExpedienteComponent implements OnInit {
  mostrarTablaPadre: Boolean = false
  noFile: String = "";
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

  constructor (
    private ProfesionaleService: ProfesionaleService,
    private SupervisorService: SupervisorService
  ) {}

  Expedients () {
    this.ProfesionaleService.getExpendients('12345678', '32, 33, 34')
      .toPromise()
      .then(res => {
        this.dataSource.data = res
      })
  }

  ngOnInit (): void {
    this.Expedients()
  }

  showInformation () {
    this.mostrarTablaPadre = !this.mostrarTablaPadre
  }

  selectFile(file: String){
    this.noFile = file;
    this.showInformation();
  }

  StateSpecialistReview () {
    this.SupervisorService.setStateSpecialistReview(this.noFile)
      .toPromise()
      .then(res => console.log(res))
  }

  StateProfessionalCorrection () {
    this.SupervisorService.setStateProfessionalCorrection(this.noFile)
      .toPromise()
      .then(res => console.log(res))
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
