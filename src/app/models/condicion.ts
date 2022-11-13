export class Condicion {
  readonly descripcion: string;
  readonly fechaGraba: Date;
  readonly usuarioGraba: string;

  constructor({ descripcion, fechaGraba, usuarioGraba }: { descripcion: string; fechaGraba: Date; usuarioGraba: string}) {
    this.descripcion = descripcion;
    this.fechaGraba = fechaGraba;
    this.usuarioGraba = usuarioGraba;
  }
}
