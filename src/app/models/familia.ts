export class Familia {
  readonly descripcion: string;
  readonly DescBreve: string;
  readonly unidadesFijasPallet: number;
  readonly porcRelacionPallet: number;
  readonly fechaGraba: Date;
  readonly usuarioGraba: string;

  constructor({
    descripcion,
    DescBreve,
    unidadesFijasPallet,
    porcRelacionPallet,
    fechaGraba,
    usuarioGraba,
  }: {
    descripcion: string;
    DescBreve : string;
    unidadesFijasPallet : number;
    porcRelacionPallet : number;
    fechaGraba: Date;
    usuarioGraba: string;
  }) {
    this.descripcion = descripcion;
    this.DescBreve = DescBreve;
    this.unidadesFijasPallet = unidadesFijasPallet;
    this.porcRelacionPallet = porcRelacionPallet;
    this.fechaGraba = fechaGraba;
    this.usuarioGraba = usuarioGraba;
  }
}
