export class Producto {
  readonly descripcion: string;
  readonly DescBreve: string;
  readonly usuarioGraba: string;

  constructor({
    descripcion,
    DescBreve,
    usuarioGraba,
  }: {
    descripcion: string;
    DescBreve : string;
    usuarioGraba: string;
  }) {
    this.descripcion = descripcion;
    this.DescBreve = DescBreve;
    this.usuarioGraba = usuarioGraba;
  }
}
