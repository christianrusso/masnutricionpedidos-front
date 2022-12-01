export class DetallePedido {
  readonly idPedido : number;
  readonly cantidad: number;
  readonly detalle: string;
  readonly porcDescuentoItem: number;
  readonly precioUnitario: number;
  readonly importe: number;
  readonly isEntregadoItem: number;
  readonly usuarioGraba: string;

  constructor({
    idPedido,
    cantidad,
    detalle,
    porcDescuentoItem,
    precioUnitario,
    importe,
    isEntregadoItem,
    usuarioGraba
  }: {
    idPedido : number;
    cantidad: number;
    detalle: string;
    porcDescuentoItem: number;
    precioUnitario: number;
    importe: number;
    isEntregadoItem: number;
    usuarioGraba: string;
  }) {
    this.idPedido = idPedido,
    this.cantidad = cantidad,
    this.detalle = detalle,
    this.porcDescuentoItem = porcDescuentoItem,
    this.precioUnitario = precioUnitario,
    this.importe = importe,
    this.isEntregadoItem = isEntregadoItem,
    this.usuarioGraba = usuarioGraba;
  }
}
