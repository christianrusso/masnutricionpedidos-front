export class Cliente {
  readonly Descripcion: string;
  readonly usuarioGraba: string;

  constructor({ Descripcion, usuarioGraba }: { Descripcion: string; usuarioGraba: string}) {
    this.Descripcion = Descripcion;
    this.usuarioGraba = usuarioGraba;
  }
}
