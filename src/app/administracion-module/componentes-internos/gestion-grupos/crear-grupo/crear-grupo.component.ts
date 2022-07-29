import { CreateGroup } from './../../../../general-module/components/interfaces/gestion';
import { MatSelectChange } from '@angular/material/select';
import { Professional } from './../../../../general-module/components/interfaces/coordinador';
import { Data } from './../../../../general-module/components/interfaces/centralizador';
import { MatDialog } from '@angular/material/dialog';
import { GestionService } from './../../../../general-module/components/servicios/gestion-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.scss']
})
export class CrearGrupoComponent implements OnInit {
  crearGrupo!: FormGroup;
  state: Data[] = [];
  tribunal: Data[] = [];
  specialist: Professional[] = [];
  constructor(private gestionService: GestionService,
    public dialogRef: MatDialog) {
    this.crearGrupo = new FormGroup({
      estado: new FormControl('', Validators.required),
      nitEncargado: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      tribunal: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.getState();
    this.getTribunal();
  }

    /**
   * @description Cierra la ventana flotante
   * @author acdraguay (Cristian Raguay)
   * @since 13/07/2022
   */
     onNoClick (): void {
      this.dialogRef.closeAll()
    }

  getState(){
    this.gestionService.getType(4).toPromise().then(res =>
      this.state = res
    )
  }

  getSpecialist(tipo: Number){
    this.gestionService.getCollaborator(21, tipo).toPromise().then(
      res => this.specialist = res
    )
  }

  getTribunal(){
    this.gestionService.getType(3).toPromise().then(
      res => this.tribunal = res
    )
  }

  newTribunal (tipo: MatSelectChange) {
    this.getSpecialist(tipo.value);
  }

  newGroup(){
    var gruop: CreateGroup = {
      estado : this.crearGrupo.get('estado')?.value,
      nitEncargado : this.crearGrupo.get('nitEncargado')?.value,
      nombre : this.crearGrupo.get('nombre')?.value,
      tipoGrupo: this.crearGrupo.get('tribunal')?.value,
      fechaModifica: new Date(),
      idGrupo: 1,
      ipModifica: "",
      usuarioModifica: ""
    }
    this.gestionService.newGroup(gruop).toPromise().then(res => this.onNoClick());
  }

}
