export class ProvinciaEdit {
  readonly DescBreve: string;
  readonly Descripcion: string;

  constructor({
    DescBreve,
    Descripcion,
  }: {
    DescBreve: string;
    Descripcion: string;
  }) {
    this.DescBreve = DescBreve;
    this.Descripcion = Descripcion;
  }
}
