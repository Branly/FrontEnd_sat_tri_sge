import { PrestamoExpedienteComponent } from './../prestamo-expediente/prestamo-expediente.component';
import { CrearExpedienteComponent } from './../crear-expediente/crear-expediente.component';
import { MatDialog } from '@angular/material/dialog';
import { RecepcionService } from './../../../general-module/components/servicios/recepcion-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { formatDate } from '@angular/common';
import * as moment from 'moment';


@Component({
  selector: 'app-recepcion-expediente',
  templateUrl: './recepcion-expediente.component.html',
  styleUrls: ['./recepcion-expediente.component.css']
})

export class RecepcionExpedienteComponent implements OnInit {

  noExpediente: string | undefined;
  tipoRecurso: number | undefined;
  nombre: string | undefined;
  nit: string | undefined;
  fechaIngreso: Date | undefined;
  gerenciaOrigen: string | undefined;
  folios: number | undefined;
  resolucion: string | undefined;
  direccion: string | undefined;
  ajustes: number | undefined;

  usuario: string | undefined;
  gerencia: string | undefined;
  departamento: string | undefined;
  comentarios: string | undefined;

  displayedColumns: string[] = [
  'noexpediente', 'tiporecurso', 'nit', 'nombrecontribuyente', 'fechatributa', 'gerenciaorigen', 'folios',
  'observaciones', 'noexpedientetributa', 'resolucion', 'direccionfiscal', 'cantidadajustes', 'acciones'
];
  dataSource = new MatTableDataSource();
  mostrarTablaPadre = true;


  @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
    this.dataSource.paginator = mp1;
  }

  constructor( private RecepcionService: RecepcionService, public dialog: MatDialog) {

  }

  newLoan(): void {
    const dialogRef = this.dialog.open(PrestamoExpedienteComponent, {
      /* width: '300px',
      disableClose: true, */
      data: { usuario: this.usuario,
              gerencia: this.gerencia,
              departamento: this.departamento,
              comentarios: this.comentarios
            }
    });
  }

  newFile(): void {
    const dialogRef = this.dialog.open(CrearExpedienteComponent, {
      /* width: 'auto',
      height: 'auto', */
      disableClose: true,
      data: {noExpediente: this.noExpediente,
             tipoRecurso: this.tipoRecurso,
             nombre: this.nombre,
              nit: this.nit,
              fechaIngreso: this.fechaIngreso,
              gerenciaOrigen: this.gerenciaOrigen,
              folios: this.folios,
              resolucion: this.resolucion,
              direccion: this.direccion,
              ajustes: this.ajustes
            }
    }).afterClosed().toPromise().then(res => this.Expedient()); 
    
  }

  ngOnInit(): void {
    this.Expedient();
  }

  Expedient(){
    this.RecepcionService.getExpendient().toPromise().then(res => {
      console.log(res);
      this.dataSource.data = res;

    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



