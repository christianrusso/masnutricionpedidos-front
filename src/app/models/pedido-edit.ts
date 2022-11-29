export class PedidoEdit {
  readonly isAnulado: number;
  readonly isEnviadoxMail: number;
  readonly isCobrado: number;
  readonly isFinalizado: number;
  readonly idCliente: number;
  readonly idVendedor: number;
  readonly idTipoReglaComercial: number;
  readonly idAbono: number;
  readonly idTipoCondicionesDeVenta: number;
  readonly fechaPedido: any;
  readonly porcDescuentoGeneral: number;
  readonly descripcion: string;
  readonly nroRemito: string;
  readonly subtotal: number;
  readonly impuestos: number;
  readonly subtotal2: number;
  readonly ivaInscriptoPorc: number;
  readonly ivaInscripto: number;
  readonly total: number;
  readonly usuarioModifica: string;

  constructor({
    isAnulado,
    isEnviadoxMail,
    isCobrado,
    isFinalizado,
    idCliente,
    idVendedor,
    idTipoReglaComercial,
    idAbono,
    idTipoCondicionesDeVenta,
    fechaPedido,
    porcDescuentoGeneral,
    descripcion,
    nroRemito,
    subtotal,
    impuestos,
    subtotal2,
    ivaInscriptoPorc,
    ivaInscripto,
    total,
    usuarioModifica,
  }: {
    isAnulado: number;
    isEnviadoxMail: number;
    isCobrado: number;
    isFinalizado: number;
    idCliente: number;
    idVendedor: number;
    idTipoReglaComercial: number;
    idAbono: number;
    idTipoCondicionesDeVenta: number;
    fechaPedido: any;
    porcDescuentoGeneral: number;
    descripcion: string;
    nroRemito: string;
    subtotal: number;
    impuestos: number;
    subtotal2: number;
    ivaInscriptoPorc: number;
    ivaInscripto: number;
    total: number;
    usuarioModifica: string;
  }) {
    this.isAnulado = isAnulado;
    this.isEnviadoxMail = isEnviadoxMail;
    this.isCobrado = isCobrado;
    this.isFinalizado = isFinalizado;
    this.idCliente = idCliente;
    this.idVendedor = idVendedor;
    this.idTipoReglaComercial = idTipoReglaComercial;
    this.idAbono = idAbono;
    this.idTipoCondicionesDeVenta = idTipoCondicionesDeVenta;
    this.fechaPedido = fechaPedido;
    this.porcDescuentoGeneral = porcDescuentoGeneral;
    this.descripcion = descripcion;
    this.nroRemito = nroRemito;
    this.subtotal = subtotal;
    this.impuestos = impuestos;
    this.subtotal2 = subtotal2;
    this.ivaInscriptoPorc = ivaInscriptoPorc;
    this.ivaInscripto = ivaInscripto;
    this.total = total;
    this.usuarioModifica = usuarioModifica;
  }
}
