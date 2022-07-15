import { CoordinadorService } from './../../../general-module/components/servicios/coordinador-service';
import { Professional } from './../../../general-module/components/interfaces/coordinador';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-colaborador',
  templateUrl: './lista-colaborador.component.html',
  styleUrls: ['./lista-colaborador.component.css']
})
export class ListaColaboradorComponent implements OnInit {
  @Input() file:any;
  constructor(public dialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Professional[],
    private CoordinadorService: CoordinadorService
  ) { }
    professional: Professional ={
      nit:"", noExpedienteTributa:"", nombre:""
    };
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.closeAll();
  }

  save(impuesto:any){
    this.professional.nit = impuesto.source.selected.value;
    this.professional.noExpedienteTributa = impuesto.source.selected.id;
    console.log(this.professional);
  }

  saveAssignment(){
    this.CoordinadorService.setAssignment(this.professional.nit, this.professional.noExpedienteTributa).subscribe(res => {
      console.log(res);
    })
    this.onNoClick();
  }

}
