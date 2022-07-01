import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centralizadorentrada-expediente',
  templateUrl: './centralizadorentrada-expediente.component.html',
  styleUrls: ['./centralizadorentrada-expediente.component.css']
})
export class CentralizadorentradaExpedienteComponent implements OnInit {

  displayedColumns: string[] = [
    'noexpendiente', 'descripcion', 'nombrecontribuyente', 'nit', 'fechatributa', 'gerenciaorigen', 'folios', 'observaciones', 
    'noexpedientetributa', 'resolucion', 'direccionfiscal', 'cantidadajustes'
  ];
  mostrarTablaPadre = true;

  constructor() { }

  ngOnInit(): void {
  }

}
