import { Component, OnInit,ViewChild,Output, EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-crear-providenciasalida',
  templateUrl: './crear-providenciasalida.component.html',
  styleUrls: ['./crear-providenciasalida.component.scss']
})
export class CrearProvidenciasalidaComponent implements OnInit {

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
  

  @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
    this.dataSource.paginator = mp1;
  }


  constructor(public dialogRef: MatDialog) { }


  /**
   * @description retorna false al componenente centralizadorSalida para ocultar la tabla Creacion providencia de salida
   * @author  (Anderson Suruy)
   * @since 28/07/2022
   */
  @Output() public data = new EventEmitter<any>()
 returnData (){
  this.data.emit({providencia: false})
 }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  onNoClick (): void {
    this.dialogRef.closeAll()
  }

  ngOnInit() {
  }

}
