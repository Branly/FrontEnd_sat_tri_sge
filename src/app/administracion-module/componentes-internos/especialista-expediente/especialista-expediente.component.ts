import { SecretarioService } from './../../../general-module/components/servicios/secretario-service';
import { EspecialistaService } from './../../../general-module/components/servicios/especialista-service';
import { ProfesionaleService } from './../../../general-module/components/servicios/profesional-service'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Component, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-especialista-expediente',
  templateUrl: './especialista-expediente.component.html',
  styleUrls: ['./especialista-expediente.component.css']
})
export class EspecialistaExpedienteComponent implements OnInit {
  mostrarTablaPadre: Boolean = false;
  mostrarTablaAgenda: Boolean = false;
  mostrarTablaExpedientes: Boolean = false;
  noFile: String = '';
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
  displayedColumns2: string[] = [
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
  dataSource2 = new MatTableDataSource()
  diaryColumns: string[] = [
    'agenda', 'asunto', 'fecha', 'acciones'
  ];
  dataDiary = new MatTableDataSource();
  @ViewChild('MatPaginator1') set matPaginator (mp1: MatPaginator) {
    this.dataSource.paginator = mp1
  }
  constructor (private profesionaleService: ProfesionaleService,
    private especialistaService: EspecialistaService,
    private SecretarioService: SecretarioService) {}

  ngOnInit (): void {
    this.Expedients();
    this.diary();
  }

  Expedients () {
    this.profesionaleService.getExpendients('87654321', '35')
      .toPromise()
      .then(res => {
        this.dataSource.data = res
      })
  }
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showInformation () {
    this.mostrarTablaPadre = !this.mostrarTablaPadre;
  }

  showTable(){
    this.mostrarTablaAgenda = !this.mostrarTablaAgenda;
  }
  /**
   * @description Obtiene el numero de Expediente de la tabla
   * @author acdraguay (Cristian Raguay)
   * @since 13/07/2022
   */
  getFile(file:String){
    this.noFile = file;
    this.showInformation();
  }
  /**
   * @description Cambia el estado del Expediente a Ponente
   * @author acdraguay (Cristian Raguay)
   * @since 25/07/2022
   */
  setStatePonent(){
    this.especialistaService.setStatePonent(this.noFile).toPromise().then(res => console.log(res));
  }
  /**
   * @description Cambia el estado del Expediente a Correccion de Supervisor
   * @author acdraguay (Cristian Raguay)
   * @since 25/07/2022
   */
  setStateSupervisorCorrection(){
    this.especialistaService.setStateSupervisorCorrection(this.noFile).toPromise().then(res => console.log(res));
  }
  /**
   * @description Cambia el estado del Expediente a Pendiente de agendar
   * @author acdraguay (Cristian Raguay)
   * @since 25/07/2022
   */
  setStatePendingDiary(file:String){
    this.especialistaService.setStatePendingDiary(file).toPromise().then(res => this.Expedients());
  }

    /**
   * @description Cambia el estado del Expediente a Creacion de Resolucion
   * @author acdraguay (Cristian Raguay)
   * @since 25/07/2022
   */
  setStateResolutionCreation(){
    this.especialistaService.setStateResolutionCreation(this.noFile).toPromise().then(res => console.log(res));
  }

    /**
   * @description Trae las agendas que tiene a aprobar
   * @author acdraguay (Cristian Raguay)
   * @since 25/07/2022
   */
  diary(){
    this.especialistaService.getDiary("87654321").toPromise().then(res => {
      console.log(res);
      this.dataDiary.data = res;
    });
  }

  diaryFile(agenda: String){
    console.log(agenda);
      this.especialistaService.getDiaryFile(agenda).toPromise().then(res => {
      console.log(res);
      this.dataSource2.data = res;
      this.showExpedient()
    });
  }

  showExpedient(){
    this.mostrarTablaExpedientes = !this.mostrarTablaExpedientes;
  }

}
