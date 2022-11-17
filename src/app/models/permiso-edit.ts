export class PermisoEdit {
  readonly Descripcion: string;
  readonly fechaGraba: Date;
  readonly usuarioGraba: string;
  readonly fechaModifica: Date;
  readonly usuarioModifica: string;

  constructor({ Descripcion, fechaGraba, usuarioGraba, fechaModifica, usuarioModifica }: { Descripcion: string; fechaGraba: Date; usuarioGraba: string, fechaModifica : Date, usuarioModifica : string}) {
    this.Descripcion = Descripcion;
    this.fechaGraba = fechaGraba;
    this.usuarioGraba = usuarioGraba;
    this.fechaModifica = fechaModifica;
    this.usuarioModifica = usuarioModifica;
  }
}
