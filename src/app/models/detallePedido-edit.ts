export class DetallePedidoEdit {
  readonly idPedido : number;
  readonly cantidad: number;
  readonly detalle: string;
  readonly porcDescuentoItem: number;
  readonly precioUnitario: number;
  readonly importe: number;
  readonly isEntregadoItem: number;
  readonly usuarioModifica: string;

  constructor({
    idPedido,
    cantidad,
    detalle,
    porcDescuentoItem,
    precioUnitario,
    importe,
    isEntregadoItem,
    usuarioModifica
  }: {
    idPedido : number;
    cantidad: number;
    detalle: string;
    porcDescuentoItem: number;
    precioUnitario: number;
    importe: number;
    isEntregadoItem: number;
    usuarioModifica: string;
  }) {
    this.idPedido = idPedido,
    this.cantidad = cantidad,
    this.detalle = detalle,
    this.porcDescuentoItem = porcDescuentoItem,
    this.precioUnitario = precioUnitario,
    this.importe = importe,
    this.isEntregadoItem = isEntregadoItem,
    this.usuarioModifica = usuarioModifica;
  }
}
