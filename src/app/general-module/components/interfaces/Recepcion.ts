export interface Expedient {
  no_expediente_tributa: String
  tipo_recurso: String
  nit_contribuyente: String
  gerencia_origen: String
  direccion_fiscal: String
  no_expediente: String
  folios: Number
  cantidad_ajustes: Number
  fecha_ingreso: Date
  nombre: String
  obsevacion: String
  recurso: String
  tipo_caso: Number
  subTipo_caso: Number
  estado: String
  observacion: String
}

export interface InformationExpedient {
  impuesto: String;
  estado: String;
  folios: Number;
  fecha_ingreso: Date;
  observacion: String;
  especialista: String;
  tipo_caso: String;
  tipo_recurso: String;
  profesional: String;
  recurso: String;
  no_expediente: String;
  no_expediente_tributa: String;
  id_agenda: String;
  nit_contribuyente: String;
  gerencia_origen: String;
  cantidad_ajustes: Number;
  fecha_preincripcion: Date;
  direccion_fiscal: String;
  fecha_interposicion: Date;
  subTipo_caso: String;
  idCasoEspecial: Number;
}
