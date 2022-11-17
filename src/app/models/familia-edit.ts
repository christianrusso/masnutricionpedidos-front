export class FamiliaEdit {
  readonly descripcion: string;
  readonly DescBreve: string;
  readonly unidadesFijasPallet: number;
  readonly porcRelacionPallet: number;
  readonly fechaGraba: Date;
  readonly usuarioGraba: string;
  readonly fechaModifica: Date;
  readonly usuarioModifica: string;

  constructor({
    descripcion,
    DescBreve,
    unidadesFijasPallet,
    porcRelacionPallet,
    fechaGraba,
    usuarioGraba,
    fechaModifica,
    usuarioModifica
  }: {
    descripcion: string;
    DescBreve : string;
    unidadesFijasPallet : number;
    porcRelacionPallet : number;
    fechaGraba: Date;
    usuarioGraba: string;
    fechaModifica : Date;
    usuarioModifica : string;
  }) {
    this.descripcion = descripcion;
    this.DescBreve = DescBreve;
    this.unidadesFijasPallet = unidadesFijasPallet;
    this.porcRelacionPallet = porcRelacionPallet;
    this.fechaGraba = fechaGraba;
    this.usuarioGraba = usuarioGraba;
    this.fechaModifica = fechaModifica;
    this.usuarioModifica = usuarioModifica;
  }
}
