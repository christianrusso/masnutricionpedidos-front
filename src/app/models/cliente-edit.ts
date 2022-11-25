export class ClienteEdit {
  readonly idTipoCliente: number;
  readonly idTipoCanal: number;
  readonly razonSocial: string;
  readonly nombreFantasia: string;
  readonly idTipoIVA: number;
  readonly CUIT: string;
  readonly score: string;
  readonly aniosActividad: string;
  readonly montoCredito: string;
  readonly idVendedorAsignado: number;
  readonly calle: string;
  readonly calle1: string;
  readonly calle2: string;
  readonly nroPuerta: string;
  readonly piso: string;
  readonly dpto: string;
  readonly idLocalidad: number;
  readonly idProvincia: number;
  readonly CP: string;
  readonly horarioAtencion: string;
  readonly horarioCobranza: string;
  readonly isBorrado: number;
  readonly web: string;
  readonly usuarioModifica: string;

  constructor({
    idTipoCliente,
    idTipoCanal,
    razonSocial,
    nombreFantasia,
    idTipoIVA,
    CUIT,
    score,
    aniosActividad,
    montoCredito,
    idVendedorAsignado,
    calle,
    calle1,
    calle2,
    nroPuerta,
    piso,
    dpto,
    idLocalidad,
    idProvincia,
    CP,
    horarioAtencion,
    horarioCobranza,
    isBorrado,
    web,
    usuarioModifica
  }: {
    idTipoCliente: number;
    idTipoCanal: number;
    razonSocial: string;
    nombreFantasia: string;
    idTipoIVA: number;
    CUIT: string;
    score: string;
    aniosActividad: string;
    montoCredito: string;
    idVendedorAsignado: number;
    calle: string;
    calle1: string;
    calle2: string;
    nroPuerta: string;
    piso: string;
    dpto: string;
    idLocalidad: number;
    idProvincia: number;
    CP: string;
    horarioAtencion: string;
    horarioCobranza: string;
    isBorrado: number;
    web: string;
    usuarioModifica: string;
  }) {
    this.idTipoCliente = idTipoCliente
    this.idTipoCanal = idTipoCanal
    this.razonSocial = razonSocial
    this.nombreFantasia = nombreFantasia
    this.idTipoIVA = idTipoIVA
    this.CUIT = CUIT
    this.score = score
    this.aniosActividad = aniosActividad
    this.montoCredito = montoCredito
    this.idVendedorAsignado = idVendedorAsignado
    this.calle = calle
    this.calle1 = calle1
    this.calle2 = calle2
    this.nroPuerta = nroPuerta
    this.piso = piso
    this.dpto = dpto
    this.idLocalidad = idLocalidad
    this.idProvincia = idProvincia
    this.CP = CP
    this.horarioAtencion = horarioAtencion
    this.horarioCobranza = horarioCobranza
    this.isBorrado = isBorrado
    this.web = web
    this.usuarioModifica = usuarioModifica;
  }
}
