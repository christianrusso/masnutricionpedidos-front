export class AccesoPermisoEdit {
  readonly idGrupoAcceso : number;
  readonly idTipoPermiso : number;
  readonly usuarioModifica: string;

  constructor({
    idGrupoAcceso,
    idTipoPermiso,
    usuarioModifica
  }: {
    idGrupoAcceso : number;
    idTipoPermiso : number;
    usuarioModifica: string;
  }) {
    this.idGrupoAcceso = idGrupoAcceso,
    this.idTipoPermiso = idTipoPermiso,
    this.usuarioModifica = usuarioModifica;
  }
}
