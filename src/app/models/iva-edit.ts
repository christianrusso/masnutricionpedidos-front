export class IVAEdit {
    readonly Descripcion: string;
    readonly DescBreve: string;
    readonly usuarioModifica: string;

    constructor({
      Descripcion,
      DescBreve,
      usuarioModifica
    }: {
      Descripcion: string;
      DescBreve : string;
      usuarioModifica : string;
    }) {
      this.Descripcion = Descripcion;
      this.DescBreve = DescBreve;
      this.usuarioModifica = usuarioModifica;
    }
  }
