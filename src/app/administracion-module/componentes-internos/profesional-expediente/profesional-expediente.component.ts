import { ProfesionaleService } from './../../../general-module/components/servicios/profesional-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { formatDate } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-profesional-expediente',
  templateUrl: './profesional-expediente.component.html',
  styleUrls: ['./profesional-expediente.component.css']
})
export class ProfesionalExpedienteComponent implements OnInit {

  displayedColumns: string[] = [
    'noexpedientetributa','nombrecontribuyente', 'nit', 'fechaingreso', 'Tiempopreinscripcion', 'estado',
    'profecional', 'acciones'
  ];
    dataSource = new MatTableDataSource();
    mostrarTablaPadre = true;


    @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
      this.dataSource.paginator = mp1;
    }

  constructor(private ProfesionaleService: ProfesionaleService) { }

  ngOnInit(): void {
    this.Expedient();
  }

  Expedient(){
    this.ProfesionaleService.getExpendient().toPromise().then(res => {
      console.log(res);
      this.dataSource.data = res;

    })
  }

}
