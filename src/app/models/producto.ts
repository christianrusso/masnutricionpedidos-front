export class Producto {
  readonly descripcion: string;
  readonly DescBreve: string;
  readonly fechaGraba: Date;
  readonly usuarioGraba: string;

  constructor({
    descripcion,
    DescBreve,
    fechaGraba,
    usuarioGraba,
  }: {
    descripcion: string;
    DescBreve : string;
    fechaGraba: Date;
    usuarioGraba: string;
  }) {
    this.descripcion = descripcion;
    this.DescBreve = DescBreve;
    this.fechaGraba = fechaGraba;
    this.usuarioGraba = usuarioGraba;
  }
}
