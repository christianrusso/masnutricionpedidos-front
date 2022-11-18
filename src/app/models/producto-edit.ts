export class ProductoEdit {
  readonly descripcion: string;
  readonly DescBreve: string;
  readonly fechaGraba: Date;
  readonly usuarioGraba: string;
  readonly fechaModifica: Date;
  readonly usuarioModifica: string;

  constructor({
    descripcion,
    DescBreve,
    fechaGraba,
    usuarioGraba,
    fechaModifica,
    usuarioModifica
  }: {
    descripcion: string;
    DescBreve : string;
    fechaGraba: Date;
    usuarioGraba: string;
    fechaModifica : Date;
    usuarioModifica : string;
  }) {
    this.descripcion = descripcion;
    this.DescBreve = DescBreve;
    this.fechaGraba = fechaGraba;
    this.usuarioGraba = usuarioGraba;
    this.fechaModifica = fechaModifica;
    this.usuarioModifica = usuarioModifica;
  }
}
