import { SecretarioService } from './../../../general-module/components/servicios/secretario-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { CrearAgendaComponent } from './crear-agenda/crear-agenda.component';
import { ArchivosAgendaComponent } from './archivos-agenda/archivos-agenda.component';
import { ResolucionExpedienteComponent } from './resolucion-expediente/resolucion-expediente.component';
import { MatDialog } from '@angular/material/dialog';
import { RecepcionService } from './../../../general-module/components/servicios/recepcion-service';
import { formatDate } from '@angular/common';
import * as moment from 'moment';



@Component({
  selector: 'app-secretario-agenda',
  templateUrl: './secretario-agenda.component.html',
  styleUrls: ['./secretario-agenda.component.css']
})
export class SecretarioAgendaComponent implements OnInit {

  noAgenda: string | undefined;
  asunto: number | undefined;

  noExpediente: string | undefined;
  tipoRecurso: number | undefined;
  nombreContribuyente: string | undefined;
  nit: string | undefined;
  fechaTributa: Date | undefined;
  gerenciaOrigen: string | undefined;
  monto: number | undefined;
  profesional: string | undefined;
 

  displayedColumns: string[] = [
    'agenda', 'asunto', 'Fecha', 'acciones'
  ];

  displayedColumns2: string[] = [
    'noexpedientetributa',
    'nombrecontribuyente',
    'nit',
    'fechaingreso',
    'Tiempopreinscripcion',
    'estado',
    'profesional',
    'acciones'
  ];

  dataSource = new MatTableDataSource();
  dataSource2 = new MatTableDataSource();
  mostrarTablaPadre: boolean = false;
  mostrarTablaPendiente: boolean = false;
  mostrarTablaResolucion: boolean = false;
  file: import("c:/Users/Anderson/Desktop/SGE-TRIBUTA/FrontEnd_sat_tri_sge/src/app/general-module/components/interfaces/Secretario").Diary[] | undefined;

  @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
    this.dataSource.paginator = mp1;
    this.dataSource2.paginator = mp1;
  }

  constructor(private SecretarioService: SecretarioService, public dialog: MatDialog) { }


  /**
   * @description implementa el componenete archivos-agenda
   * @author  (Anderson Suruy)
   * @since 26/07/2022
   */
  newDiaryFiles(): void {
    const dialogRef = this.dialog.open(ArchivosAgendaComponent, {
      disableClose: true,
      data: {noAgenda: this.noAgenda,
            asunto: this.asunto
            }
    }).afterClosed().toPromise().then(res => this.diary()); 
  }


 /**
   * @description implementa el componenete crear-agenda
   * @author  (Anderson Suruy)
   * @since 26/07/2022
   */
  newFile(): void {
    const dialogRef = this.dialog.open(CrearAgendaComponent, {
      /* width: 'auto',
      height: 'auto', */
      disableClose: true,
      data: {noAgenda: this.noAgenda,
            asunto: this.asunto
            }
    }).afterClosed().toPromise().then(res => this.diary()); 
  }


  ngOnInit(): void {
    this.diary();
  }
 

   /**
   * @description Oculta la tabla con informacion general y muestra la informacion de un expediente
   * @author  (Anderson Suruy)
   * @since 27/07/2022
   */
  showInformation () {
    this.mostrarTablaPadre = !this.mostrarTablaPadre
    this.mostrarTablaPendiente = !this.mostrarTablaPendiente
  }

    /**
   * @description Oculta la tabla con informacion de Agendas y muestra la informacion de la tabla Resolucion-Expediente
   * @author  (Anderson Suruy)
   * @since 27/07/2022
   */
  showInformation2 () {
    this.mostrarTablaPadre = !this.mostrarTablaPadre
    this.mostrarTablaResolucion = !this.mostrarTablaResolucion
  }
  
   /**
   * @description Oculta la tabla Resolucion-Expediente y muestra la tabla principal de Agenda
   * @author  (Anderson Suruy)
   * @since 28/07/2022
   */
  retornoresolucion (resolu: any){
    this.mostrarTablaResolucion = resolu.retornar
    this.mostrarTablaPadre = !this.mostrarTablaPadre
  }
  


   /* agendaInfo (noAgenda: String) {
    this.SecretarioService.getDiary(noAgenda)
      .toPromise()
      .then(res => {
        this.file = res
        this.file. = noAgenda.toString()
        console.log(res)
        this.showInformation()
      })
  }  */
 



   diary(){
    this.SecretarioService.getDiary().toPromise().then(res => {
      console.log(res);
      this.dataSource.data = res;
    })
  }
 
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
