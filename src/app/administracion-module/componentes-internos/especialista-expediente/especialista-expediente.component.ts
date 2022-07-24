import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-especialista-expediente',
  templateUrl: './especialista-expediente.component.html',
  styleUrls: ['./especialista-expediente.component.css']
})
export class EspecialistaExpedienteComponent implements OnInit {
  mostrarTablaPadre: Boolean = false
  noFile: String = "";
  displayedColumns: string[] = [
    'noexpedientetributa',
    'nombrecontribuyente',
    'nit',
    'fechaingreso',
    'Tiempopreinscripcion',
    'estado',
    'profecional',
    'acciones'
  ]
  dataSource = new MatTableDataSource()
  @ViewChild('MatPaginator1') set matPaginator (mp1: MatPaginator) {
    this.dataSource.paginator = mp1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
