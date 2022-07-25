import { ProfesionaleService } from './../../../general-module/components/servicios/profesional-service'
import { Providens } from './../../../general-module/components/interfaces/profesional'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Component, Inject, OnInit } from '@angular/core'

@Component({
  selector: 'app-comentario-providencia',
  templateUrl: './comentario-providencia.component.html',
  styleUrls: ['./comentario-providencia.component.scss']
})
export class ComentarioProvidenciaComponent implements OnInit {
  constructor (
    public dialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Providens,
    private ProfesionaleService: ProfesionaleService
  ) {}

  ngOnInit (): void {}

  onNoClick (): void {
    this.dialogRef.closeAll()
  }

  /**
   * @description crea una providencia
   * @author acdraguay (Cristian Raguay)
   * @since 13/07/2022
   */
  async newProvidens () {
    await this.ProfesionaleService.setProvidens(this.data)
      .toPromise()
      .then(res => (this.data.idProvidencia = res.idProvidencia))
    this.newExpdientProvidens()
  }
  /**
   * @description asigna una providencia a un Expediente
   * @author acdraguay (Cristian Raguay)
   * @since 13/07/2022
   */
  newExpdientProvidens () {
    this.ProfesionaleService.setProvidensExpedient(this.data)
      .toPromise()
      .then(res => {
        console.log(res)
        this.setState()
      })
    this.onNoClick()
  }
  /**
   * @description Cambia el estado del Expediente
   * @author acdraguay (Cristian Raguay)
   * @since 13/07/2022
   */
  setState () {
    this.ProfesionaleService.setElaborateProvidens(this.data.noexpediente)
      .toPromise()
      .then(res => console.log(res))
  }
}
