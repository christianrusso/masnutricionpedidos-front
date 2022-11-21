export class ProductoEdit {
  readonly descripcion: string;
  readonly DescBreve: string;
  readonly usuarioModifica: string;

  constructor({
    descripcion,
    DescBreve,
    usuarioModifica
  }: {
    descripcion: string;
    DescBreve : string;
    usuarioModifica : string;
  }) {
    this.descripcion = descripcion;
    this.DescBreve = DescBreve;
    this.usuarioModifica = usuarioModifica;
  }
}
