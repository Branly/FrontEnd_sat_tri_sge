import { PresidenteService } from './../../../general-module/components/servicios/presidente-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { formatDate } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-presidente-expediente',
  templateUrl: './presidente-expediente.component.html',
  styleUrls: ['./presidente-expediente.component.css']
})
export class PresidenteExpedienteComponent implements OnInit {

  displayedColumns: string[] = [
    'noexpediente', 'tiporecurso', 'nit', 'nombrecontribuyente', 'fechatributa', 'gerenciaorigen',
    'resolucion', 'monto', 'fechainterposicion', 'tiempopreincripcion', 'estado',
    'profecional', 'especialista', 'agenda'
  ];
  dataSource = new MatTableDataSource();
  mostrarTablaPadre = true;

  @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
    this.dataSource.paginator = mp1;
  }

  constructor(private PresidenteService: PresidenteService) { }

  ngOnInit(): void {
    this.Expedient();
  }

  Expedient(){
    this.PresidenteService.getExpendient().toPromise().then(res => {
      console.log(res);
      this.dataSource.data = res;

    })
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
