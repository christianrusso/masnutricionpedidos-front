export class ProductoEdit {
    readonly descripcion: string;
    readonly idTipoProducto: number;
    readonly idTipoFamiliaProducto: number;
    readonly unidadesFijasPallet: number;
    readonly porcRelacionPallet: number;
    readonly precioReferencia: string;
    readonly codigo: number;
    readonly usuarioModifica: string;
    constructor({
        descripcion,
        idTipoProducto,
        idTipoFamiliaProducto,
        unidadesFijasPallet,
        porcRelacionPallet,
        precioReferencia,
        codigo,
        usuarioModifica
    }: {
        descripcion: string;
        idTipoProducto: number;
        idTipoFamiliaProducto: number;
        unidadesFijasPallet: number;
        porcRelacionPallet: number;
        precioReferencia: string;
        codigo: number;
        usuarioModifica: string;
    }) {
      this.descripcion = descripcion,
      this.idTipoProducto = idTipoProducto,
      this.idTipoFamiliaProducto = idTipoFamiliaProducto,
      this.unidadesFijasPallet = unidadesFijasPallet,
      this.precioReferencia = precioReferencia,
      this.porcRelacionPallet = porcRelacionPallet,
      this.codigo = codigo,
      this.usuarioModifica = usuarioModifica
    }
  }
