export class IVAEdit {
    readonly Descripcion: string;
    readonly DescBreve: string;
    readonly fechaGraba: Date;
    readonly usuarioGraba: string;
    readonly fechaModifica: Date;
    readonly usuarioModifica: string;
  
    constructor({
      Descripcion,
      DescBreve,
      fechaGraba,
      usuarioGraba,
      fechaModifica,
      usuarioModifica
    }: {
      Descripcion: string;
      DescBreve : string;
      fechaGraba: Date;
      usuarioGraba: string;
      fechaModifica : Date;
      usuarioModifica : string;
    }) {
      this.Descripcion = Descripcion;
      this.DescBreve = DescBreve;
      this.fechaGraba = fechaGraba;
      this.usuarioGraba = usuarioGraba;
      this.fechaModifica = fechaModifica;
      this.usuarioModifica = usuarioModifica;
    }
  }
  