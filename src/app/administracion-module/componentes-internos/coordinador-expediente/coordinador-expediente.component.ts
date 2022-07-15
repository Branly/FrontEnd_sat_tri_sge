import { element } from 'protractor';
import { ListaColaboradorComponent } from './../lista-colaborador/lista-colaborador.component';
import { MatDialog } from '@angular/material/dialog';
import { CoordinadorService } from './../../../general-module/components/servicios/coordinador-service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

interface Collaborator{
  nit: String;
  nombre: String;
}

@Component({
  selector: 'app-coordinador-expediente',
  templateUrl: './coordinador-expediente.component.html',
  styleUrls: ['./coordinador-expediente.component.css']
})
export class CoordinadorExpedienteComponent implements OnInit {

  collaborator: Collaborator[] = [];
  no_File: String = "";
  displayedColumns: string[] = [
    'tiporecurso', 'nombrecontribuyente', 'nit', 'gerenciaorigen', 'folios', 'noexpedientetributa', 'ajustes',
    'impuestro', 'tipocaso', 'subtipocaso', 'acciones'
  ];
    dataSource = new MatTableDataSource();
    mostrarTablaPadre = true;


    @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
      this.dataSource.paginator = mp1;
    }

  constructor(private CoordinadorService: CoordinadorService,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.Expedient();
  }

  Expedient(){
    this.CoordinadorService.getExpendient().toPromise().then(res => {
      //console.log(res);
      this.dataSource.data = res;
    })
  }

  getProfessional(rol:Number, tipo:String, file: String){
    this.collaborator = [];
    this.CoordinadorService.getProfessional(rol, tipo).toPromise().then(res => {
      //console.log(res);
      res.forEach(element => {
        element.noExpedienteTributa = file
        this.collaborator.push(element)
      });
    })
    console.log(this.collaborator);
    this.newAssignment();
  }

  newAssignment(): void {
    const dialogRef = this.dialog.open(ListaColaboradorComponent, {
      width: '300px',
      disableClose: true,
      data: this.collaborator
    }).afterClosed().toPromise().then(re => {
      this.Expedient()
    });
  }

}
