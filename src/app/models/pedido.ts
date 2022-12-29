export class Pedido {
  readonly isAnulado: number;
  readonly isEnviadoxMail: number;
  readonly isCobrado: number;
  readonly isFinalizado: number;
  readonly idCliente: number;
  readonly idVendedor: number;
  readonly idTipoReglaComercial: number;
  readonly idAbono: number;
  readonly idTipoCondicionesDeVenta: number;
  readonly num_interno: number;
  readonly representante: string;
  readonly cod: number;
  readonly cuit: number;
  readonly domicilio: string;
  readonly telefono: number;
  readonly transporte: string;
  readonly observaciones: string;
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
  readonly usuarioGraba: string;

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
    num_interno,
    representante,
    cod,
    cuit,
    domicilio,
    telefono,
    transporte,
    observaciones,
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
    usuarioGraba,
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
    num_interno : number;
    representante : string;
    cod	 : number;
    cuit	 : number;
    domicilio : string;
    telefono : number;
    transporte: string;
    observaciones : string;
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
    usuarioGraba: string;
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
    this.num_interno = num_interno;
    this.representante = representante;
    this.cod = cod;
    this.cuit = cuit;
    this.domicilio = domicilio;
    this.telefono = telefono;
    this.transporte = transporte;
    this.observaciones = observaciones;
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
    this.usuarioGraba = usuarioGraba;
  }
}
