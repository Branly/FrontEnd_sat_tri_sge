import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserRole } from 'src/app/general-module/components/interfaces/user.interface';
import { UserService } from 'src/app/general-module/components/servicios/user.service';
import { EnterExitLeft } from 'src/app/general-module/components/util/animation-utils';

@Component({
  selector: 'roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.scss'],
  animations: [
    EnterExitLeft,
  ],
})
export class RolesTableComponent implements OnInit {

  @Input('type') type!: string;
  @Input('login') login?: string;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.dataSource.sort = ms;
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.dataSource.paginator = mp;
  }

  columns = ['id', 'app', 'name', 'description'];
  dataSource = new MatTableDataSource<UserRole>();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUserRoles(this.type, this.login).toPromise().then(data => {
      this.dataSource.data = data;
    });
  }
}
