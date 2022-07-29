import { GestionService } from './../../../../general-module/components/servicios/gestion-service'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core'


@Component({
  selector: 'app-modificar-grupo',
  templateUrl: './modificar-grupo.component.html',
  styleUrls: ['./modificar-grupo.component.css']
})
export class ModificarGrupoComponent implements OnInit {
  displayedColumns: string[] = ['nit', 'nombre', 'puesto', 'estado', 'acciones']
  dataSource = new MatTableDataSource()
  @ViewChild('MatPaginator1') set matPaginator (mp1: MatPaginator) {
    this.dataSource.paginator = mp1
  }
  @Input() igGrupo: Number = 0
  @Output() public data = new EventEmitter<any>();
  tableProfessional: Boolean = false;
  constructor (private gestionService: GestionService) {}
  nitSupervisor:String ="";
  nombre:String ="";
  ngOnInit (): void {
    this.gerSupervisor();
  }

  gerSupervisor () {
    this.gestionService
      .getSupervisorGroup(this.igGrupo)
      .toPromise()
      .then(
        res => this.dataSource.data = res
      )
  }

  showSupervisor(){
    this.data.emit({dato:false});
  }

  showProfessional(nit:String, nombre:String){
    this.nitSupervisor = nit;
    this.nombre = nombre;
    this.tableProfessional = !this.tableProfessional;
  }

  getProffesional(tabla:any){
    console.log(tabla);
    this.tableProfessional = tabla.dato;
  }
}
