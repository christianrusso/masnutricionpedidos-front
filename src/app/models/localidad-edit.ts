export class LocalidadEdit {
  readonly idProvincia : number;
  readonly DescBreve: string;
  readonly Descripcion: string;
  readonly CodigoPostal: string;

  constructor({
    idProvincia,
    DescBreve,
    Descripcion,
    CodigoPostal
  }: {
    idProvincia : number;
    DescBreve: string;
    Descripcion: string
    CodigoPostal: string
  }) {
    this.idProvincia = idProvincia;
    this.DescBreve = DescBreve;
    this.Descripcion = Descripcion;
    this.CodigoPostal = CodigoPostal;
  }
}
