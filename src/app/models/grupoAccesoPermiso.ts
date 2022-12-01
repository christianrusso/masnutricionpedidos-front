export class AccesoPermiso {
  readonly idGrupoAcceso : number;
  readonly idTipoPermiso : number;
  readonly usuarioGraba: string;

  constructor({
    idGrupoAcceso,
    idTipoPermiso,
    usuarioGraba
  }: {
    idGrupoAcceso : number;
    idTipoPermiso : number;
    usuarioGraba: string;
  }) {
    this.idGrupoAcceso = idGrupoAcceso,
    this.idTipoPermiso = idTipoPermiso,
    this.usuarioGraba = usuarioGraba;
  }
}
