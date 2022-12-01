export class Email {
  readonly idCliente : number;
  readonly descripcion: string;
  readonly usuarioGraba: string;

  constructor({
    idCliente,
    descripcion,
    usuarioGraba
  }: {
    idCliente : number;
    descripcion: string;
    usuarioGraba: string;
  }) {
    this.idCliente = idCliente,
    this.descripcion = descripcion,
    this.usuarioGraba = usuarioGraba;
  }
}
