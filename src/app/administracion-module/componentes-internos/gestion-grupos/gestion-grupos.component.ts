import { CrearGrupoComponent } from './crear-grupo/crear-grupo.component'
import { MatDialog } from '@angular/material/dialog'
import { GestionService } from './../../../general-module/components/servicios/gestion-service'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Component, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-gestion-grupos',
  templateUrl: './gestion-grupos.component.html',
  styleUrls: ['./gestion-grupos.component.css']
})
export class GestionGruposComponent implements OnInit {
  displayedColumns: string[] = ['idgrupo', 'tribunal', 'nombre', 'acciones']
  dataSource = new MatTableDataSource()
  @ViewChild('MatPaginator1') set matPaginator (mp1: MatPaginator) {
    this.dataSource.paginator = mp1
  }
  tablaPrinsipal: Boolean = false;
  idGrupo: Number = 0;
  constructor (
    private gestionService: GestionService,
    public dialog: MatDialog
  ) {}

  ngOnInit (): void {
    this.group()
  }

  public applyFilter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  group () {
    this.gestionService
      .getGroup()
      .toPromise()
      .then(res => (this.dataSource.data = res))
  }

  newGroup (): void {
    const dialogRef = this.dialog
      .open(CrearGrupoComponent, {
        /* width: 'auto',
      height: 'auto', */
        disableClose: true
      })
      .afterClosed()
      .toPromise()
      .then(res => this.group())
  }

  showSupervisor (id: Number) {
    this.idGrupo = id
    this.tablaPrinsipal = !this.tablaPrinsipal
  }
  getSupervisor(tabla:any){
    console.log(tabla);
    this.tablaPrinsipal = tabla.dato;
  }

}
