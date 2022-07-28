export interface Group{
  id_grupo: String;
  nombre: String;
}

export interface CreateGroup{
  estado: Number;
  fechaModifica: Date;
  idGrupo: Number;
  ipModifica: String;
  nitEncargado: String;
  nombre: String;
  usuarioModifica: String;
}
