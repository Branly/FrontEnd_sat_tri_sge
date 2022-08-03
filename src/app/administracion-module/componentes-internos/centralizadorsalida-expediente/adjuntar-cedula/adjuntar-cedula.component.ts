import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-adjuntar-cedula',
  templateUrl: './adjuntar-cedula.component.html',
  styleUrls: ['./adjuntar-cedula.component.scss']
})
export class AdjuntarCedulaComponent implements OnInit {
  
  adjuntarCedula: FormGroup;

  constructor(public dialogRef: MatDialog) {
    {
      this.adjuntarCedula = new FormGroup({
        noExpediente: new FormControl('', Validators.required),
        cedula: new FormControl('', Validators.required)
      })
    }
   }


  ngOnInit() {
  }

  onNoClick (): void {
    this.dialogRef.closeAll()
  }

} 
