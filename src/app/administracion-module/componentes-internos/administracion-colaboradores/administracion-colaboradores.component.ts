import { Catalog } from './../../../general-module/components/interfaces/catalogo.interfece';
import { CatalogosService } from './../../../general-module/components/servicios/catalogos.service';
import { Validators } from '@angular/forms';
import { DialogService } from './../../../general-module/components/servicios/dialog.service';
import { Button, Dropdown, FormListener, FormStructure, Input, OptionChild } from 'mat-dynamic-form';
import { Collaborators, UpdateCollaborator, CreateCollaborator } from './../../../general-module/components/interfaces/Colaborador-interface';
import { element } from 'protractor';
import { MatPaginator } from '@angular/material/paginator';
import { ColaboradoresService } from './../../../general-module/components/servicios/colaboradores-service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-administracion-colaboradores',
  templateUrl: './administracion-colaboradores.component.html',
  styleUrls: ['./administracion-colaboradores.component.css']
})
export class AdministracionColaboradoresComponent implements OnInit, FormListener {

  formStructure!: FormStructure;
  updating: boolean = false;

  displayedColumns: string[] = ['nit', 'nombre', 'tipo_tributa', 'puesto', 'estado', 'correo', 'acciones'];
  collaboratorTable = new MatTableDataSource();

  constructor(
    public dialog: MatDialog,
    public dialogService: DialogService,
    private colaboradoresService: ColaboradoresService,
    private catalogosService: CatalogosService,
    private alert: DialogService,
  
  ) { 
    this.catalogosService.getCatalogDataByIdCatalog(1).toPromise().then(res => {
      console.log(res);
    

      this.formStructure = new FormStructure();
      this.formStructure.title = 'Crear colaborador';
      this.formStructure.appearance = 'standard';
      this.formStructure.globalValidators = Validators.required;
      this.formStructure.nodes = [
        new Input('nit', 'NIT').apply({
          singleLine: false,
          action: { callback: this, type: 'blur' }, 
        }),
        new Input('nombre','Nombre').apply({
          singleLine: false,
          disabled: true,
        }),
        new Input('tipo_tributa','Tipo Tributa').apply({
          singleLine: false,
          disabled: true,
        }),
        new Input('puesto','Puesto').apply({
          singleLine: false,
          disabled: true,
        }),
        new Dropdown('estado','Estado', res.map((s: Catalog) => 
          new OptionChild(s.nombre.toString(), s.codigo.toString())
          )).apply({
          action: { callback: this, type: 'change' }
        }),
        new Input('correo','Correo').apply({
          action: { callback: this, type: 'change'},
        }),
      ];
      this.formStructure.validateActions = [
        new Button('cancel', 'Cancelar', {callback: this, style: 'warn'}).apply({
          icon: 'close',
        }),
        new Button('save', 'Guardar', { callback: this, style: 'primary'}).apply({
          icon: 'save',
          validateForm: true
        })
      ]
    })
    
  }

  ngOnInit(): void {
    this.colaboradoresService.getCollaborators().toPromise().then(res => {
      this.collaboratorTable.data = res;
      console.log(res)
    })
  }

  onEvent(id: string, value: any): void {
      if(id == 'nit'){
        console.log(isNaN(value))
        if(isNaN(value)){
          this.dialogService.show({
            title: "Error",
            text: "El NIT debe ser numero",
            icon: 'error',
            showConfirmButton: true,
          })
        }
        else if(value == '' || value == undefined || value == null || RegExp(/^\s+$/).test(value)){
        }
        else{
          this.colaboradoresService.getCollaboradorInfoByNit(value.toString()).toPromise().then(res => {
            console.log(res)
            this.formStructure.getControlById('nombre')?.setValue(res.nombre);
            this.formStructure.getControlById('tipo_tributa')?.setValue(res.nombreGerencia);
            this.formStructure.getControlById('correo')?.setValue(res.correo);

          })
        }
      }

      if(id = 'state'){
        console.log(value)
      }
  }

  onClick(actionId: string): void {
      if(actionId.match('cancel')){
        this.dialog.closeAll();
      }

      if(actionId.match('save')){

        this.alert.show({
          title: `${!this.updating? 'Nuevo colaborador' : 'Actualizador colaborador'}`,
          text: `${!this.updating? '¿Desea crear un nuevo colaborado?' : '¿Está seguro que desea actualizar el colaborador?'}`,
          icon: 'question',
          showConfirmButton: true,
          showCancelButton: true,
        }).then((result) => { 
          if(result == 'primary'){
            if(this.updating){ //actualizar el colaborador
              const updateCola: UpdateCollaborator = {
                nit: this.formStructure.getControlById('nit')!.value,
                nombre: this.formStructure.getControlById('nombre')!.value,
                correo: this.formStructure.getControlById('correo')!.value,
                estado: this.formStructure.getControlById('estado')!.value,
                puesto: this.formStructure.getControlById('puesto')!.value,
                tipo_tributa: this.formStructure.getControlById('tipo_tributa')!.value,
              }
              console.log(updateCola);
              this.colaboradoresService.updateCollaborator(this.formStructure.getControlById('nit')!.value, updateCola).toPromise().then(res => {
                this.dialogService.show({
                  title: 'Colaborador actualizado',
                  text: 'Colaborador actualizado correctamente',
                  icon: 'success',
                  showConfirmButton: true,
                }).then((result) => {
                  if(result == 'primary'){
                    this.colaboradoresService.getCollaborators().toPromise().then(res => {
                      this.collaboratorTable.data = res;
                    }).then(() => {
                      this.dialog.closeAll();
                    })
                  }
                })
              })
            }
            else { //crear un nuevo colaborador
              const crearCola: CreateCollaborator = {
                correo: this.formStructure.getControlById('correo')!.value,
                nit: this.formStructure.getControlById('nit')!.value,
                nombre: this.formStructure.getControlById('nombre')!.value,
                puesto: this.formStructure.getControlById('puesto')!.value,
                tipo_tributa: this.formStructure.getControlById('tipo_tributa')!.value,
                estado: this.formStructure.getControlById('estado')!.value,
              }
              console.log(crearCola)
              this.colaboradoresService.createCollaborator(crearCola).toPromise().then( res => {
                this.dialogService.show({
                  title: 'Colaborador agregar',
                  text: 'Colaborador agregado exitosamente',
                  showConfirmButton: true,
                }).then((result) => {
                  if(result == 'primary'){
                    this.colaboradoresService.getCollaborators().toPromise().then( res => {
                      this.collaboratorTable.data = res;
                    }).then(() => {
                      this.dialog.closeAll();
                    })
                  }
                })
              })
            }
          }
        }).catch(err => {console.error(err)})
      }

  }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.collaboratorTable.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.collaboratorTable.filter = filterValue.trim().toLowerCase();

    if (this.collaboratorTable.paginator) {
      this.collaboratorTable.paginator.firstPage();
    }
  }

  showDialog(element?: Collaborators){
    if(element){
      this.updating = true;
      this.formStructure.title = 'Modificar Colaborador';

      this.formStructure.getNodeById('nit').value = element.nit;
      this.formStructure.getNodeById('nombre').value = element.nombre;
      this.formStructure.getNodeById('tipo_tributa').value = element.tipo_tributa;
      this.formStructure.getNodeById('puesto').value = element.puesto;
      this.formStructure.getNodeById('estado').value = element.estado;
      this.formStructure.getNodeById('correo').value = element.correo;

      this.formStructure.getNodeById('nit').apply({
        disabled: true,
      })

    }

    else if(this.formStructure.title.match('Modificar colaborador')){
      this.updating = false;
      this.formStructure.title = 'Crear colaborador'
      this.formStructure.getNodeById('nit').value = "";
      this.formStructure.getNodeById('nombre').value = "";
      this.formStructure.getNodeById('tipo_tributa').value = "";
      this.formStructure.getNodeById('puesto').value = "";
      this.formStructure.getNodeById('estado').value = "";
      this.formStructure.getNodeById('correo').value = "";
      this.formStructure.getNodeById('nit').apply({
        disabled: false,
      })
    }

    this.dialogService.show({
      showConfirmButton: false,
      formStructure: this.formStructure
    })
  }

}
