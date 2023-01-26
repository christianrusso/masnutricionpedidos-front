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
  num_interno : number;
  representante : string;
  codigo	 : number;
  cuit	 : number;
  domicilio : string;
  telefono : number;
  transporte: string;
  observaciones : string;
  fechaPedido : any;
  fechaGraba? : any,
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
