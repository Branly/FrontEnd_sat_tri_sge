import { CreateSupervisor } from './../../../../general-module/components/interfaces/gestion';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GestionService } from './../../../../general-module/components/servicios/gestion-service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Professional } from './../../../../general-module/components/interfaces/coordinador';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-supervisor',
  templateUrl: './crear-supervisor.component.html',
  styleUrls: ['./crear-supervisor.component.scss']
})
export class CrearSupervisorComponent implements OnInit {

  crearSupervisor!: FormGroup;
  supervisor: Professional[] = [];
  professional: Professional[] = [];
  tipo:Number = 0;
  constructor(private gestionService: GestionService,
    public dialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: {typeTribunal: String, id:Number}) {
    this.crearSupervisor = new FormGroup({
      nitSupervisor: new FormControl('', Validators.required),
      nitProfessional: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    console.log(this.data)
    this.getSupervisor();
    this.getProfessional();
  }

  getSupervisor(){
    if (this.data.typeTribunal == "Tributario") {
      this.tipo = 9;
    } else {
      this.tipo = 10;
    }
    this.gestionService.getCollaborator(6, this.tipo).toPromise().then(
      res => this.supervisor = res
    )
  }

  getProfessional(){
    if (this.data.typeTribunal == "Tributario") {
      this.tipo = 9;
    } else {
      this.tipo =10;
    }
    this.gestionService.getCollaborator(5, this.tipo).toPromise().then(
      res => this.professional = res
    )
  }


    /**
   * @description Cierra la ventana flotante
   * @author acdraguay (Cristian Raguay)
   * @since 13/07/2022
   */
     onNoClick (): void {
      this.dialogRef.closeAll()
    }

    newSupervisor(){
      var newSup: CreateSupervisor = {
        fechaModifica: new Date(),
        idGrupo: this.data.id,
        ipModifica: "as",
        nitProfesional: this.crearSupervisor.get('nitProfessional')?.value,
        nitSupervisor: this.crearSupervisor.get('nitSupervisor')?.value,
        usuarioModifica: ""
      }
      this.gestionService.newSupervisor(newSup).toPromise().then();
      this.onNoClick();
    }
}
