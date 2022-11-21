export class TelefonoEdit {
  readonly descripcion: string;
  readonly usuarioModifica: string;

  constructor({
    descripcion,
    usuarioModifica,
  }: {
    descripcion: string;
    usuarioModifica: string;
  }) {
    this.descripcion = descripcion;
    this.usuarioModifica = usuarioModifica;
  }
}
