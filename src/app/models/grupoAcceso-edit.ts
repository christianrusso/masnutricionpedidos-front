export class AccesoEdit {
  readonly Descripcion : string;
  readonly isBorrado: number;
  readonly usuarioModifica: string;

  constructor({
    Descripcion,
    isBorrado,
    usuarioModifica
  }: {
    Descripcion : string;
    isBorrado: number;
    usuarioModifica: string;
  }) {
    this.Descripcion = Descripcion,
    this.isBorrado = isBorrado,
    this.usuarioModifica = usuarioModifica;
  }
}
