import { CoordinadorService } from './../../../general-module/components/servicios/coordinador-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-coordinador-expediente',
  templateUrl: './coordinador-expediente.component.html',
  styleUrls: ['./coordinador-expediente.component.css']
})
export class CoordinadorExpedienteComponent implements OnInit {

  displayedColumns: string[] = [
    'tiporecurso', 'nombrecontribuyente', 'nit', 'gerenciaorigen', 'folios', 'noexpedientetributa', 'ajustes',
    'impuestro', 'tipocaso', 'subtipocaso', 'acciones'
  ];
    dataSource = new MatTableDataSource();
    mostrarTablaPadre = true;


    @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
      this.dataSource.paginator = mp1;
    }

  constructor(private CoordinadorService: CoordinadorService) { }

  ngOnInit(): void {
    this.Expedient();
  }

  Expedient(){
    this.CoordinadorService.getExpendient().toPromise().then(res => {
      console.log(res);
      this.dataSource.data = res;

    })
  }

}
