export class FamiliaEdit {
  readonly descripcion: string;
  readonly DescBreve: string;
  readonly unidadesFijasPallet: number;
  readonly porcRelacionPallet: number;
  readonly usuarioModifica: string;

  constructor({
    descripcion,
    DescBreve,
    unidadesFijasPallet,
    porcRelacionPallet,
    usuarioModifica
  }: {
    descripcion: string;
    DescBreve : string;
    unidadesFijasPallet : number;
    porcRelacionPallet : number;
    usuarioModifica : string;
  }) {
    this.descripcion = descripcion;
    this.DescBreve = DescBreve;
    this.unidadesFijasPallet = unidadesFijasPallet;
    this.porcRelacionPallet = porcRelacionPallet;
    this.usuarioModifica = usuarioModifica;
  }
}
