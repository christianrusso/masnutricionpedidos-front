export class Acceso {
  readonly Descripcion : string;
  readonly isBorrado: number;
  readonly usuarioGraba: string;

  constructor({
    Descripcion,
    isBorrado,
    usuarioGraba
  }: {
    Descripcion : string;
    isBorrado: number;
    usuarioGraba: string;
  }) {
    this.Descripcion = Descripcion,
    this.isBorrado = isBorrado,
    this.usuarioGraba = usuarioGraba;
  }
}
