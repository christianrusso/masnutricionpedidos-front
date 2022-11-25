export interface PedidoData {
  idPedido : number;
  isAnulado  : number;
  isEnviadoxMail	: number;
  isCobrado: number;
  isFinalizado: number;
  idCliente : number;
  idVendedor  : number;
  idTipoReglaComercial	: number;
  idAbono: number;
  idTipoCondicionesDeVenta: number;
  fechaPedido : any;
  porcDescuentoGeneral  : number;
  descripcion	: string;
  nroRemito: string;
  subtotal: number;
  impuestos: number;
  subtotal2: number;
  ivaInscriptoPorc: number;
  ivaInscripto: number;
  total: number;
}
