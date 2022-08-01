import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { CentralizadorService } from './../../../general-module/components/servicios/centralizador-service';
import { AdjuntarCedulaComponent } from './adjuntar-cedula/adjuntar-cedula.component';
import { AdjuntarProvidenciasalidaComponent } from './adjuntar-providenciasalida/adjuntar-providenciasalida.component';
import { ModificarGerenciaComponent } from './modificar-gerencia/modificar-gerencia.component';


@Component({
  selector: 'app-centralizadorsalida-expediente',
  templateUrl: './centralizadorsalida-expediente.component.html',
  styleUrls: ['./centralizadorsalida-expediente.component.css']
})
export class CentralizadorsalidaExpedienteComponent implements OnInit {

  noExpediente: string | undefined;
  tipoRecurso: number | undefined;
  nombreContribuyente: string | undefined;
  nit: string | undefined;
  fechaTributa: Date | undefined;
  gerenciaOrigen: string | undefined;
  monto: number | undefined;
  profesional: string | undefined;

  displayedColumns: string[] = [
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
  mostrarTablaPadre: boolean = false;
  mostrarTablaProvidenciaSalida: boolean = false;
  

  @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
    this.dataSource.paginator = mp1;
  }

  constructor(private CentralizadorService: CentralizadorService, public dialog: MatDialog) { }

  /**
   * @description implementa el componenete adjuntar-cedula
   * @author  (Anderson Suruy)
   * @since 30/07/2022
   */
  newCedula(): void {
    const dialogRef = this.dialog.open(AdjuntarCedulaComponent, {
      /* width: 'auto',
      height: 'auto', */
      disableClose: true,
      data: {noExpediente: this.noExpediente,
            }
    })
  }

  modGerencia(): void {
    const dialogRef = this.dialog.open(ModificarGerenciaComponent, {
      /* width: 'auto',
      height: 'auto', */
      disableClose: true,
      data: {noExpediente: this.noExpediente,
            }
    })
  }

  /**
   * @description Oculta la tabla principal del centralizador de salida y muestra la ventana emergente para adjuntar la providencia
   * @author  (Anderson Suruy)
   * @since 30/07/2022
   */
  newProvidenciasalida(): void {
    const dialogRef = this.dialog.open(AdjuntarProvidenciasalidaComponent, {
      /* width: 'auto',
      height: 'auto', */
      disableClose: true,
      
    })
  }
/**
   * @description Oculta la tabla creacion providencia de saliday muestra la tabla principal del centralizador de salida
   * @author  (Anderson Suruy)
   * @since 30/07/2022
   */
  retornorTablaPrincipal (provide: any){
    this.mostrarTablaPadre = !this.mostrarTablaPadre
    this.mostrarTablaProvidenciaSalida = !this.mostrarTablaProvidenciaSalida
  }

  /**
   * @description Oculta la tabla principal del centralizador de salida y muestra la tabla creacion providencia de salida
   * @author  (Anderson Suruy)
   * @since 30/07/2022
   */
  showProvidenciaSalida () {
    this.mostrarTablaPadre = !this.mostrarTablaPadre
    this.mostrarTablaProvidenciaSalida = !this.mostrarTablaProvidenciaSalida
  }

  ngOnInit() {
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
