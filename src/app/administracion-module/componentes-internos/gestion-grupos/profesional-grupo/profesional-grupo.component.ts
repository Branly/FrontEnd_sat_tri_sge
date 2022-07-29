import { GestionService } from './../../../../general-module/components/servicios/gestion-service'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Component, Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-profesional-grupo',
  templateUrl: './profesional-grupo.component.html',
  styleUrls: ['./profesional-grupo.component.css']
})
export class ProfesionalGrupoComponent implements OnInit {
  displayedColumns: string[] = ['nit', 'nombre', 'puesto', 'estado', 'acciones']
  dataSource = new MatTableDataSource()
  @ViewChild('MatPaginator1') set matPaginator (mp1: MatPaginator) {
    this.dataSource.paginator = mp1
  }
  @Input() NitSupervisor: String = '';
  @Input() nombre: String = '';
  @Output() public data = new EventEmitter<any>();
  tabla:Boolean = false;
  constructor (private gestionService: GestionService) {}

  ngOnInit (): void {
    this.getProfessional();
  }

  getProfessional () {
    this.gestionService
      .getProfessionalGroup(this.NitSupervisor)
      .toPromise()
      .then(
        res => this.dataSource.data = res
      )
  }

  showSupervisor(){
    this.data.emit({dato:false});
  }



}
