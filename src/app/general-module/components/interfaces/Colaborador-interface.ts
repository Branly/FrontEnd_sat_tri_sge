export interface Collaborators  {
    nit: string,
    nombre: string,
    correo: string,
    estado: string,
    puesto: string,
    tipo_tributa: string
  }

  export interface ColaboradorFromProsis {
    correo: string;
    estado: string;
    nit: string;
    nombre: string;
    nombrePuesto: string;
    nombreGerencia: string;
  }

  export interface UpdateCollaborator  {
    nit: string,
    nombre: string,
    correo: string,
    estado: string,
    puesto: string,
    tipo_tributa: string
  }  


  export interface CreateCollaborator extends UpdateCollaborator {
    nit: string;
  }