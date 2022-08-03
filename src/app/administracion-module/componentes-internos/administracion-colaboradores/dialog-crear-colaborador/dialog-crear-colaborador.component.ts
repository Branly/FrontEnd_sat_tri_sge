import { UtilidadesService } from './../../../../general-module/components/servicios/utilidades.service';
import { DialogService } from './../../../../general-module/components/servicios/dialog.service';
import { UserService } from './../../../../general-module/components/servicios/user.service';
import { ColaboradoresService } from './../../../../general-module/components/servicios/colaboradores-service';
import { Collaborators } from './../../../../general-module/components/interfaces/Colaborador-interface';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-crear-colaborador',
  templateUrl: './dialog-crear-colaborador.component.html',
  styleUrls: ['./dialog-crear-colaborador.component.css']
})
export class DialogCrearColaboradorComponent implements OnInit {

  crearColab!: FormGroup;
  mostrarFechas: boolean = true;
  history!: any;
  answer!: any;
  region!: number
  mobNumberPattern = "^[0-9]{10}$";


  constructor(
    public dialog: MatDialog,
    private alert: DialogService,
    private colaboradoresService: ColaboradoresService,
    private utilidades: UtilidadesService,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: Collaborators){ 
    this.crearColab = new FormGroup({
      nit: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      tipo_tributa: new FormControl('', Validators.required),
      puesto: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      correo: new FormControl('',Validators.required)
    })
  }

  async ngOnInit() {
    if(this.data) this.setDataForm(this.data);
  }

  cancelar(){
    this.dialog.closeAll();
  }

  consultarColaboradorByNIT(NIT: any){
    const nitConsulta = NIT.target.value;
    if (nitConsulta == '' || nitConsulta == null || nitConsulta == undefined) return;
    this.userService.obtenerInfoGeneralByNIT(nitConsulta).toPromise().then(res => {
      console.log(res)
      res.nombre = this.utilidades.formatName(res.nombre);
      this.crearColab.get('nombre')?.setValue(res.nombre);
    }).catch(e => {
      this.alert.show({
        title: 'No se encontro el NIT del colaborador',
        icon: 'error'
      });
      this.crearColab.reset();
      console.log(e);
    })
  }

  setDataForm( data: Collaborators ){
    console.log(data);
    this.crearColab.get('nit')?.setValue(data.nit);
    this.crearColab.get('nit')?.disable();
    this.crearColab.get('nombre')?.setValue(data.nombre);
    this.crearColab.get('nombre')?.disable();
    this.crearColab.get('tipo_tributa')?.setValue(data.tipo_tributa);
    this.crearColab.get('tipo_tributa')?.disable();
    this.crearColab.get('puesto')?.setValue(data.puesto);
    this.crearColab.get('puesto')?.disable();
    this.crearColab.get('estado')?.setValue(data.estado);
    this.crearColab.get('estado')?.disable();
    this.crearColab.get('correo')?.setValue(data.correo);
    this.crearColab.get('correo')?.disable();
  }

  estadoColaborador: any[] = [
    { value: 44, viewValue: 'Activo' },
    { value: 4, viewValue: 'Suspendido' },
    { value: 3, viewValue: 'Goce de vacaciones' },
    { value: 5, viewValue: 'Con licencia' },
    { value: 2, viewValue: 'Inactivo' },
    { value: 61, viewValue: 'Licencia' }
  ]
}