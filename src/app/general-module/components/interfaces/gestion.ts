export interface Group{
  id_grupo: String;
  nombre: String;
  tribunal:String;
}

export interface CreateGroup{
  estado: Number;
  fechaModifica: Date;
  idGrupo: Number;
  ipModifica: String;
  nitEncargado: String;
  nombre: String;
  usuarioModifica: String;
  tipoGrupo:Number;
}

export interface Collaborator{
  nit:String,
  nombre:String,
  estado:String,
  puesto:String
}

export interface CreateSupervisor{
    fechaModifica: Date,
    idGrupo: Number,
    ipModifica: String,
    nitProfesional: String,
    nitSupervisor: String,
    usuarioModifica: String
}
