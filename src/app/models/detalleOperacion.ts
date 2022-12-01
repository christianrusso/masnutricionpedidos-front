export class Operacion {
  readonly idPedido : number;
  readonly idDetallePedido : number;
  readonly cantidad: number;
  readonly detalle: string;
  readonly precioUnitario: number;
  readonly porcDescuentoItem: number;
  readonly importe: number;
  readonly usuarioGraba: string;

  constructor({
    idPedido,
    idDetallePedido,
    cantidad,
    detalle,
    porcDescuentoItem,
    precioUnitario,
    importe,
    usuarioGraba
  }: {
    idPedido : number;
    idDetallePedido : number;
    cantidad: number;
    detalle: string;
    precioUnitario: number;
    porcDescuentoItem: number;
    importe: number;
    usuarioGraba: string;
  }) {
    this.idPedido = idPedido,
    this.idDetallePedido = idDetallePedido,
    this.cantidad = cantidad,
    this.detalle = detalle,
    this.porcDescuentoItem = porcDescuentoItem,
    this.precioUnitario = precioUnitario,
    this.importe = importe,
    this.usuarioGraba = usuarioGraba;
  }
}
