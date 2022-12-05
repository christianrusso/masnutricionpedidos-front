export class Producto {
  readonly descripcion: string;
  readonly idTipoProducto: number;
  readonly idTipoFamiliaProducto: number;
  readonly unidadesFijasPallet: number;
  readonly porcRelacionPallet: number;
  readonly precioReferencia: string;
  readonly usuarioGraba: string;

  constructor({
    descripcion,
    idTipoProducto,
    idTipoFamiliaProducto,
    unidadesFijasPallet,
    porcRelacionPallet,
    precioReferencia,
    usuarioGraba,
  }: {
    descripcion: string;
    idTipoProducto: number;
    idTipoFamiliaProducto: number;
    unidadesFijasPallet: number;
    porcRelacionPallet: number;
    precioReferencia: string;
    usuarioGraba: string;
  }) {
    this.descripcion = descripcion;
    this.idTipoProducto = idTipoProducto;
    this.idTipoFamiliaProducto = idTipoFamiliaProducto;
    this.unidadesFijasPallet = unidadesFijasPallet;
    this.porcRelacionPallet = porcRelacionPallet;
    this.precioReferencia = precioReferencia;
    this.usuarioGraba = usuarioGraba;
  }
}
