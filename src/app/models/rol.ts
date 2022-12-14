export class Rol {
    readonly isCliente: number;
    readonly isDetalleOperacion: number;
    readonly isDetallePedido: number;
    readonly isEmail: number;
    readonly isEmpresa: number;
    readonly isGrupoAcceso: number;
    readonly isGrupoAccesoPermiso: number;
    readonly isLocalidad: number;
    readonly isPedido: number;
    readonly isProducto: number;
    readonly isProvincia: number;
    readonly isTelefono: number;
    readonly isVendedor: number;
    readonly usuarioGraba: string;

    constructor({
        isCliente,
        isDetalleOperacion,
        isDetallePedido,
        isEmail,
        isEmpresa,
        isGrupoAcceso,
        isGrupoAccesoPermiso,
        isLocalidad,
        isPedido,
        isProducto,
        isProvincia,
        isTelefono,
        isVendedor,
        usuarioGraba,
    }: {
        isCliente: number;
        isDetalleOperacion: number;
        isDetallePedido: number;
        isEmail: number;
        isEmpresa: number;
        isGrupoAcceso: number;
        isGrupoAccesoPermiso: number;
        isLocalidad: number;
        isPedido: number;
        isProducto: number;
        isProvincia: number;
        isTelefono: number;
        isVendedor: number;
        usuarioGraba: string;
    }) {
        this.isCliente = isCliente;
        this.isDetalleOperacion = isDetalleOperacion;
        this.isDetallePedido = isDetallePedido;
        this.isEmail = isEmail;
        this.isEmpresa = isEmpresa;
        this.isGrupoAcceso = isGrupoAcceso;
        this.isGrupoAccesoPermiso = isGrupoAccesoPermiso;
        this.isLocalidad = isLocalidad;
        this.isPedido = isPedido;
        this.isProducto = isProducto;
        this.isProvincia = isProvincia;
        this.isTelefono = isTelefono;
        this.isVendedor = isVendedor;
        this.usuarioGraba = usuarioGraba;
    }
  }
