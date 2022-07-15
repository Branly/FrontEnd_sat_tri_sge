export interface Data{
  codigo: number;
  nombre: string;
}

export interface Impost{
  fechaModifica: Date;
  idIpmuesto: Number;
  ipModifica: String;
  monto: Number;
  noExpedienteTributa: String;
  usuarioModifica: String;
}

export interface Complement {
  complejidad: Number;
  fechaInterposicion: Date;
  fechaModifica: Date;
  idCasoEspecial: Number;
  ipModifica: String;
  nitColaboradorConfronto: String;
  noExpedienteTributa: String;
  subTipoCaso: Number;
  tipoCaso: Number;
  usuarioModifica: String;
}
