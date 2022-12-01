export class TelefonoEdit {
  readonly idCliente: number;
  readonly idTipoTelefono: number;
  readonly descripcion: string;
  readonly usuarioModifica: string;

  constructor({
    idCliente,
    idTipoTelefono,
    descripcion,
    usuarioModifica
  }: {
    idCliente: number;
    idTipoTelefono: number;
    descripcion: string;
    usuarioModifica: string;
  }) {
    this.idCliente = idCliente,
    this.idTipoTelefono = idTipoTelefono,
    this.descripcion = descripcion,
    this.usuarioModifica = usuarioModifica;
  }
}
