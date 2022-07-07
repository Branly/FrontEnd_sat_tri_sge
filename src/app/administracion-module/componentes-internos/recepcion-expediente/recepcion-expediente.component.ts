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

  displayedColumns: string[] = [
  'noexpediente', 'tiporecurso', 'nit', 'nombrecontribuyente', 'fechatributa', 'gerenciaorigen', 'folios',
  'observaciones', 'noexpedientetributa', 'resolucion', 'direccionfiscal', 'cantidadajustes', 'acciones'
];
  dataSource = new MatTableDataSource();
  mostrarTablaPadre = true;
  

  @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
    this.dataSource.paginator = mp1;
  }

  constructor( private RecepcionService: RecepcionService) { 
    
  }

  ngOnInit(): void {
    this.Expedient();  
  }

  Expedient(){
    this.RecepcionService.getExpendient().toPromise().then(res => {
      console.log(res);
      this.dataSource.data = res;
      
    })
  }
}

