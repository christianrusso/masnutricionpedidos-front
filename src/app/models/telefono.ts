export class Telefono {
  readonly idCliente: number;
  readonly idTipoTelefono: number;
  readonly descripcion: string;
  readonly usuarioGraba: string;

  constructor({
    idCliente,
    idTipoTelefono,
    descripcion,
    usuarioGraba
  }: {
    idCliente: number;
    idTipoTelefono: number;
    descripcion: string;
    usuarioGraba: string;
  }) {
    this.idCliente = idCliente,
    this.idTipoTelefono = idTipoTelefono,
    this.descripcion = descripcion,
    this.usuarioGraba = usuarioGraba;
  }
}
