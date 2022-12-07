export class VendedorEdit {
  readonly idEmpresa : number;
  readonly NickName: string;
  readonly Password: string;
  readonly NombreApellido: string;
  readonly CodInterno: string;
  readonly Email: string;
  readonly isAdmin: number;
  readonly usuarioModifica: string;

  constructor({
    idEmpresa,
    NickName,
    Password,
    NombreApellido,
    CodInterno,
    Email,
    isAdmin,
    usuarioModifica
  }: {
    idEmpresa : number;
    NickName: string;
    Password: string;
    NombreApellido: string;
    CodInterno: string;
    Email: string;
    isAdmin: number;
    usuarioModifica: string;
  }) {
    this.idEmpresa = idEmpresa;
    this.NickName = NickName;
    this.Password = Password;
    this.NombreApellido = NombreApellido;
    this.CodInterno = CodInterno;
    this.Email = Email;
    this.isAdmin = isAdmin;
    this.usuarioModifica = usuarioModifica;
  }
}
