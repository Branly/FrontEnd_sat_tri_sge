import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-recepcion-expediente',
  templateUrl: './recepcion-expediente.component.html',
  styleUrls: ['./recepcion-expediente.component.css']
})

export class RecepcionExpedienteComponent implements OnInit {

  displayedColumns: string[] = ['noexpendiente', 'descripcion', 'nombrecontribuyente', 'nit', 'fechatributa' ];
  mostrarTablaPadre = true;



  constructor() { }

  ngOnInit(): void {
    
  }



}
