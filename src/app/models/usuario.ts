export class Usuario {
    readonly idEmpresa: number;
    readonly idGrupoAcceso: number;
    readonly Nickname: string;
    readonly Password: string;
    readonly NombreApellido: string;
    readonly CodInterno: string;
    readonly Email: string;
    readonly isAdmin: number;
    readonly usuarioGraba: string;

    constructor({
        idEmpresa,
        idGrupoAcceso,
        Nickname,
        Password,
        NombreApellido,
        CodInterno,
        Email,
        isAdmin,
        usuarioGraba
    }: {
        idEmpresa: number;
        idGrupoAcceso: number;
        Nickname: string;
        Password: string;
        NombreApellido: string;
        CodInterno: string;
        Email: string;
        isAdmin: number;
        usuarioGraba: string;
    }) {
        this.idEmpresa = idEmpresa;
        this.idGrupoAcceso = idGrupoAcceso;
        this.Nickname = Nickname;
        this.Password = Password;
        this.NombreApellido = NombreApellido;
        this.CodInterno = CodInterno;
        this.Email = Email;
        this.isAdmin = isAdmin;
        this.usuarioGraba = usuarioGraba;
    }
  }
