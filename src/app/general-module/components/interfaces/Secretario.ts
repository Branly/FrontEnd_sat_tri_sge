export interface Diary{
  id_agenda: string;
  asunto_agenda:string;
  fecha_creacion: Date;
}

export interface createDiary{
  asuntoAgenda: String;
  fechaCreacion: Date;
  fechaModifica: Date;
  idAgenda: String;
  ipModifica: String;
  tipoAgenda: Number;
  usuarioModifica: String;
  }