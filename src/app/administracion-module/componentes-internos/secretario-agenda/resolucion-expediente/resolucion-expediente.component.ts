import { PrestamoExpedienteComponent } from '../../prestamo-expediente/prestamo-expediente.component';
import { CrearExpedienteComponent } from '../../crear-expediente/crear-expediente.component';
import { MatDialog } from '@angular/material/dialog';
import { RecepcionService } from '../../../../general-module/components/servicios/recepcion-service';
import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { formatDate } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-resolucion-expediente',
  templateUrl: './resolucion-expediente.component.html',
  styleUrls: ['./resolucion-expediente.component.css']
})
export class ResolucionExpedienteComponent implements OnInit {

  noExpediente: string | undefined;
  tipoRecurso: number | undefined;
  nombre: string | undefined;
  nit: string | undefined;
  fechaIngreso: Date | undefined;
  gerenciaOrigen: string | undefined;
  resolucion: string | undefined;
  monto: number | undefined;
  proyectoResolucion: string | undefined;
  providencia: string | undefined;


  displayedColumns: string[] = [
  'noexpediente', 'tiporecurso', 'nombrecontribuyente','nit', 'fechatributa', 'gerenciaorigen','resolucion','monto',
  'proyectoresolucion','providencia','acciones'
];
  dataSource = new MatTableDataSource();
  mostrarTablaPadre = true;

  constructor(public dialog: MatDialog) { }

  /* onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data);
  } */





 /**
   * @description retorna false al componenente secretario para ocultar la tabla Resolucion-Expediente
   * @author  (Anderson Suruy)
   * @since 28/07/2022
   */

 @Output() public data = new EventEmitter<any>()
 
 returnData (){
  this.data.emit({retornar: false})
 }



  ngOnInit() {
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
