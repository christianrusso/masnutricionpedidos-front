export class Canal {
  readonly Descripcion: string;
  readonly fechaGraba: Date;
  readonly usuarioGraba: string;

  constructor({ Descripcion, fechaGraba, usuarioGraba }: { Descripcion: string; fechaGraba: Date; usuarioGraba: string}) {
    this.Descripcion = Descripcion;
    this.fechaGraba = fechaGraba;
    this.usuarioGraba = usuarioGraba;
  }
}
