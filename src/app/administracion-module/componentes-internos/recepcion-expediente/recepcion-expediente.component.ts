import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recepcion-expediente',
  templateUrl: './recepcion-expediente.component.html',
  styleUrls: ['./recepcion-expediente.component.css']
})

export class RecepcionExpedienteComponent implements OnInit {

  displayedColumns: string[] = [
    'noexpendiente', 'descripcion', 'nombrecontribuyente', 'nit', 'fechatributa', 'gerenciaorigen', 
    'folios', 'observaciones', 'noexpedientetributa', 'resolucion', 'direccionfiscal', 'cantidadajustes' 
  ];
  mostrarTablaPadre = true;



  constructor() { }

  ngOnInit(): void {
    
  }



}
