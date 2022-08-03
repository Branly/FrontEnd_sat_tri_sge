export interface Expedient {
  no_expediente_tributa: String;
  tipo_recurso: String;
  nit_contribuyente: String;
  gerencia_origen: String
  direccion_fiscal: String;
  no_expediente: String;
  folios: Number;
  cantidad_ajustes: Number;
  fecha_ingreso: Date;
  nombre: String;
  obsevacion: String;
  recurso: String;
  tipo_caso: Number;
  subTipo_caso: Number;
  estado: String;
  observacion: String;
  fecha_preincripcion: Date;
}

export interface InformationExpedient {
  nombre: String,
  folios: Number,
  impuesto: String,
  monto: Number,
  estado: String,
  direccion_fiscal: String,
  nit_contribuyente: String,
  cantidad_ajustes: Number,
  fecha_interposicion: Date,
  fecha_preincripcion: Date,
  gerencia_origen: String,
  no_expediente: String,
  tipo_recurso: String,
  id_agenda: String,
  observacion: String,
  subTipo_caso: String,
  tipo_caso: String,
  especialista: String,
  recurso: String,
  fecha_ingreso: Date,
  profesional: String,
  no_expediente_tributa: String
  idCasoEspecial: Number
}

export interface createExpedient{
  cantidadAjustes: Number;
  direccionFiscal: String;
  fechaIngreso: Date;
  fechaModifica: Date;
  fechaPreincripcion: Date;
  folios: Number;
  idGerenciaOrigen: Number;
  idAgenda: String;
  idEstado: Number;
  idProces: Number;
  ipModifica: String;
  nitContribuyente: String;
  nitProfesional: String;
  noExpediente: String;
  noExpedienteTributa: String;
  tipoRecurso: Number;
  usuarioModifica: String;
  resolucionEntrada: String;
  nombre: String;
}

export interface Loan{
  comentario: String;
  departamento: Number;
  fechaEntrada: Date;
  fechaModifica: Date;
  fechaSalida: Date;
  gerencia: Number;
  idPrestamo: Number;
  ipModifica: String;
  nitSolicitante: String;
  noExpedienteTributa: String;
  usuarioModifica: String
}
