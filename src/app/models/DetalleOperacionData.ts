export interface DetalleOperacionData {
  idOperacion : number;
  idPedido : number;
  idDetallePedido : number;
  cantidad: number;
  detalle: string;
  porcDescuentoItem: number;
  precioUnitario: number;
  importe: number;
}
