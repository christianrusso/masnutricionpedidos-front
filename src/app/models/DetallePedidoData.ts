export interface DetallePedidoData {
  idPedido : number;
  idDetallePedido : number;
  cantidad: number;
  detalle: string;
  porcDescuentoItem: number;
  precioUnitario: number;
  importe: number;
  isEntregadoItem: number;
}
