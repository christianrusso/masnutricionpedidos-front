export class IVA {
  readonly Descripcion: string;
  readonly DescBreve: string;
  readonly usuarioGraba: string;

  constructor({
    Descripcion,
    DescBreve,
    usuarioGraba,
  }: {
    Descripcion: string;
    DescBreve: string;
    usuarioGraba: string;
  }) {
    this.Descripcion = Descripcion;
    this.DescBreve = DescBreve;
    this.usuarioGraba = usuarioGraba;
  }
}
