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
    'noexpediente', 'tiporecurso', 'nombrecontribuyente', 'nit', 'fechatributa', 'gerenciaorigen', 'folios', 'observaciones', 
    'noexpedientetributa', 'resolucion', 'direccionfiscal', 'cantidadajustes'
  ];
  dataSource = new MatTableDataSource();
  mostrarTablaPadre = true;

  @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
    this.dataSource.paginator = mp1;
  }  

  constructor() { }

  ngOnInit(): void {
  }

}
