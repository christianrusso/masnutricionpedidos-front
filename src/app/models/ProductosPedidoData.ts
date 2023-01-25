export interface ProductoPedidoData {
  id_producto: number;
  descripcion: string;
  precioReferencia: number;
  cantidad: number;
  porcRelacionPallet: number;
  unidadesFijasPallet: number;
  condicion: string;
  codigo: number;
  total: number;
  categoria: number;
  idProducto?: number;
}
