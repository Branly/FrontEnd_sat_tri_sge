import { CentralizadorService } from './../../../general-module/components/servicios/centralizador-service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-centralizadorentrada-expediente',
  templateUrl: './centralizadorentrada-expediente.component.html',
  styleUrls: ['./centralizadorentrada-expediente.component.css']
})

export class CentralizadorentradaExpedienteComponent implements OnInit {

  displayedColumns: string[] = [
    'nombrecontribuyente', 'nit', 'fechatributa', 'noexpedientetributa',
    'fechapreinscripcion', 'estado', 'profecional','acciones'
  ];
  dataSource = new MatTableDataSource();
  mostrarTablaPadre = true;

  @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
    this.dataSource.paginator = mp1;
  }

  constructor(private CentralizadorService: CentralizadorService) { }

  ngOnInit(): void {
    this.Expedient();
  }

  Expedient(){
    this.CentralizadorService.getExpendient().toPromise().then(res => {
      console.log(res);
      this.dataSource.data = res;

    })
  }

}
