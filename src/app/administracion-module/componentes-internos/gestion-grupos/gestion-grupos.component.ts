import { GestionService } from './../../../general-module/components/servicios/gestion-service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gestion-grupos',
  templateUrl: './gestion-grupos.component.html',
  styleUrls: ['./gestion-grupos.component.css']
})
export class GestionGruposComponent implements OnInit {

  displayedColumns: string[] = [
    'idgrupo', 'nombre', 'acciones'
  ];
    dataSource = new MatTableDataSource();
    @ViewChild('MatPaginator1') set matPaginator(mp1: MatPaginator) {
      this.dataSource.paginator = mp1;
    }
  constructor(private gestionService: GestionService) { }

  ngOnInit(): void {
    this.group();
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  group(){
    this.gestionService.getGroup().toPromise().then(res =>
      this.dataSource.data = res
      );
  }
}
