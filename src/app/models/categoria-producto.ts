export class CategoriaProducto {
  readonly descripcion: string;
  readonly usuarioGraba: string;

  constructor({
    descripcion,
    usuarioGraba
  }: {
    descripcion: string;
    usuarioGraba: string;
  }) {
    this.descripcion = descripcion,
    this.usuarioGraba = usuarioGraba;
  }
}
