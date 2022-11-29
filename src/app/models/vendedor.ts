export class Vendedor {
  readonly idEmpresa : number;
  readonly NickName: string;
  readonly Password: string;
  readonly NombreApellido: string;
  readonly CodInterno: string;
  readonly Email: string;
  readonly isAdmin: string;
  readonly usuarioGraba: string;

  constructor({
    idEmpresa,
    NickName,
    Password,
    NombreApellido,
    CodInterno,
    Email,
    isAdmin,
    usuarioGraba
  }: {
    idEmpresa : number;
    NickName: string;
    Password: string;
    NombreApellido: string;
    CodInterno: string;
    Email: string;
    isAdmin: string;
    usuarioGraba: string;
  }) {
    this.idEmpresa = idEmpresa;
    this.NickName = NickName;
    this.Password = Password;
    this.NombreApellido = NombreApellido;
    this.CodInterno = CodInterno;
    this.Email = Email;
    this.isAdmin = isAdmin;
    this.usuarioGraba = usuarioGraba;
  }
}
