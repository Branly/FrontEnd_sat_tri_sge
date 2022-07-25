import { SecretarioService } from './../../../general-module/components/servicios/secretario-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-secretario-agenda',
  templateUrl: './secretario-agenda.component.html',
  styleUrls: ['./secretario-agenda.component.css']
})
export class SecretarioAgendaComponent implements OnInit {

  displayedColumns: string[] = [
    'agenda', 'asunto', 'Fecha', 'acciones'
  ];
  dataSource = new MatTableDataSource();
  mostrarTablaPadre = true;

  @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
    this.dataSource.paginator = mp1;
  }

  constructor(private SecretarioService: SecretarioService) { }

  ngOnInit(): void {
    this.diary();
  }

  diary(){
    this.SecretarioService.getDiary().toPromise().then(res => {
      console.log(res);
      this.dataSource.data = res;

    })
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
