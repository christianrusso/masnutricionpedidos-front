export class EmpresaEdit {
  readonly NickName: string;
  readonly CUIT: string;
  readonly RazonSocial: string;
  readonly Direccion: string;
  readonly Email: string;
  readonly Icono: string;
  readonly usuarioModifica: string;

  constructor({
    NickName,
    CUIT,
    RazonSocial,
    Direccion,
    Email,
    Icono,
    usuarioModifica
  }: {
    NickName: string;
    CUIT: string;
    RazonSocial: string;
    Direccion: string;
    Email: string;
    Icono: string;
    usuarioModifica: string;
  }) {
    this.NickName = NickName;
    this.CUIT = CUIT;
    this.RazonSocial = RazonSocial;
    this.Direccion = Direccion;
    this.Email = Email;
    this.Icono = Icono;
    this.usuarioModifica = usuarioModifica;
  }
}
