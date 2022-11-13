export class IVA {
  readonly Descripcion: string;
  readonly DescBreve: string;
  readonly fechaGraba: Date;
  readonly usuarioGraba: string;

  constructor({
    Descripcion,
    DescBreve,
    fechaGraba,
    usuarioGraba,
  }: {
    Descripcion: string;
    DescBreve : string;
    fechaGraba: Date;
    usuarioGraba: string;
  }) {
    this.Descripcion = Descripcion;
    this.DescBreve = DescBreve;
    this.fechaGraba = fechaGraba;
    this.usuarioGraba = usuarioGraba;
  }
}
