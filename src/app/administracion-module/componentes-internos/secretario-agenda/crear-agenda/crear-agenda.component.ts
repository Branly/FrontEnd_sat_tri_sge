import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { createDiary } from './../../../../general-module/components/interfaces/Secretario'
import { SecretarioService } from './../../../../general-module/components/servicios/secretario-service';

@Component({
  selector: 'app-crear-agenda',
  templateUrl: './crear-agenda.component.html',
  styleUrls: ['./crear-agenda.component.scss']
})
export class CrearAgendaComponent implements OnInit {

  crearAgenda!: FormGroup;

  file: createDiary = {
    asuntoAgenda: '',
    fechaCreacion: new Date(),
    fechaModifica: new Date(),
    tipoAgenda: 9,
    idAgenda: '',
    ipModifica: '',
    usuarioModifica: ''
  }

  constructor(public dialogRef: MatDialog,private SecretarioService: SecretarioService) { 

    
      this.crearAgenda = new FormGroup({
        asuntoAgenda: new FormControl('', Validators.required),
        fechaCreacion: new FormControl('', Validators.required)
      })
    
  }

    createDiary() {
      var newDiary: createDiary = {
        asuntoAgenda: this.crearAgenda.get('asuntoAgenda')?.value,
        fechaCreacion: this.crearAgenda.get('fechaCreacion')?.value,
        fechaModifica: new Date(),
        tipoAgenda: 9,
        idAgenda: '',
        ipModifica: '',
        usuarioModifica: ''
      }
      console.log(newDiary)
      this.SecretarioService.setDiary(newDiary)
        .toPromise()
        .then(res => {
          /* this.SecretarioService.setState(res.idAgenda)
            .toPromise()
            .then(re => console.log(res)); */
            this.onNoClick();
        })
    }

  




   /**
   * @description cerrar ventana flotante creacion de Agenda
   * @author  (Anderson Suruy)
   * @since 26/07/2022
   */
  onNoClick (): void {
    this.dialogRef.closeAll()
  }

  ngOnInit() {
  }

}
