export interface ProductosPorPedidoData {
  idPedido : number;
  idProducto : number;
  idCategoria : number;
  cantidad: number;
  codigo: number;
  descripcion : string;
  precio: number;
  unidades_bulto: number;
  pallets: number;
  condicion: number;
  total:  number;
}
