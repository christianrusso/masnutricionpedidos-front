export class EmailEdit {
  readonly idCliente : number;
  readonly descripcion: string;
  readonly usuarioModifica: string;

  constructor({
    idCliente,
    descripcion,
    usuarioModifica
  }: {
    idCliente : number;
    descripcion: string;
    usuarioModifica: string;
  }) {
    this.idCliente = idCliente,
    this.descripcion = descripcion,
    this.usuarioModifica = usuarioModifica;
  }
}
