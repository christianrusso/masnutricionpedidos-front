export class Familia {
  readonly descripcion: string;
  readonly DescBreve: string;
  readonly unidadesFijasPallet: number;
  readonly porcRelacionPallet: number;
  readonly usuarioGraba: string;

  constructor({
    descripcion,
    DescBreve,
    unidadesFijasPallet,
    porcRelacionPallet,
    usuarioGraba,
  }: {
    descripcion: string;
    DescBreve : string;
    unidadesFijasPallet : number;
    porcRelacionPallet : number;
    usuarioGraba: string;
  }) {
    this.descripcion = descripcion;
    this.DescBreve = DescBreve;
    this.unidadesFijasPallet = unidadesFijasPallet;
    this.porcRelacionPallet = porcRelacionPallet;
    this.usuarioGraba = usuarioGraba;
  }
}
