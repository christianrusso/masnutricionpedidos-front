export class TelefonoEdit {
  readonly descripcion: string;
  readonly fechaGraba: Date;
  readonly usuarioGraba: string;
  readonly fechaModifica: Date;
  readonly usuarioModifica: string;

  constructor({ descripcion, fechaGraba, usuarioGraba, fechaModifica, usuarioModifica }: { descripcion: string; fechaGraba: Date; usuarioGraba: string, fechaModifica : Date, usuarioModifica : string}) {
    this.descripcion = descripcion;
    this.fechaGraba = fechaGraba;
    this.usuarioGraba = usuarioGraba;
    this.fechaModifica = fechaModifica;
    this.usuarioModifica = usuarioModifica;
  }
}
