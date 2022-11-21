export class CanalEdit {
  readonly Descripcion: string;
  readonly usuarioModifica: string;

  constructor({
    Descripcion,
    usuarioModifica,
  }: {
    Descripcion: string;
    usuarioModifica: string;
  }) {
    this.Descripcion = Descripcion;
    this.usuarioModifica = usuarioModifica;
  }
}
