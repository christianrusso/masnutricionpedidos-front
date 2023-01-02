import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  panelOpenState = false;
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  @Output() sidenavClose = new EventEmitter();
  @Output() public sidenavToggle = new EventEmitter();
  rol: any = localStorage.getItem('rol');
  isAdmin: any = localStorage.getItem('isAdmin');
  nickname: any;
  idUsuario: any;
  isCliente: any;
  isDetalleOperacion: any;
  isDetallePedido: any;
  isEmail: any;
  isEmpresa: any;
  isGrupoAcceso: any;
  isGrupoAccesoPermiso: any;
  isLocalidad: any;
  isPedido: any;
  isProducto: any;
  isProvincia: any;
  isTelefono: any;
  isCategoria: any;
  isVendedor: any;
  constructor(private router: Router, private readonly authService: AuthService, private rolService: RolService,) {}

  @ViewChild('sidenav')
  sidenav?: MatSidenav;
  ngOnInit(): void {
    this.nickname = localStorage.getItem('NickName')
    this.idUsuario = localStorage.getItem('idUsuario')
    console.log(this.idUsuario);

    this.rolService.getRol(this.idUsuario).subscribe((response: any) => {
      console.log(response);
      this.isCliente = response[0].isCliente,
      this.isDetalleOperacion = response[0].isDetalleOperacion,
      this.isDetallePedido = response[0].isDetallePedido,
      this.isEmail = response[0].isEmail,
      this.isEmpresa = response[0].isEmpresa,
      this.isGrupoAcceso = response[0].isGrupoAcceso,
      this.isGrupoAccesoPermiso = response[0].isGrupoAccesoPermiso,
      this.isLocalidad = response[0].isLocalidad,
      this.isPedido = response[0].isPedido,
      this.isProducto = response[0].isProducto,
      this.isProvincia = response[0].isProvincia,
      this.isTelefono = response[0].isTelefono,
      this.isCategoria = response[0].isCategoria,
      this.isVendedor = response[0].isVendedor
    });
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };

  goToHomePage(){
    this.router.navigateByUrl('home/bienvenida');
  }
  goToCanalListarPage() {
    this.router.navigateByUrl('home/tipo-canal/listar');
  }
  goToTipoClienteListarPage() {
    this.router.navigateByUrl('home/tipo-cliente/listar');
  }
  goToCondicionesListarPage(){
    this.router.navigateByUrl('home/tipo-condiciones/listar');
  }
  goToFamiliaListarPage(){
    this.router.navigateByUrl('home/tipo-familia-producto/listar');
  }
  goToIVAListarPage(){
    this.router.navigateByUrl('home/tipo-iva/listar');
  }
  goToPermisoListarPage(){
    this.router.navigateByUrl('home/tipo-permisos/listar');
  }
  goToProductosListarPage(){
    this.router.navigateByUrl('home/tipo-productos/listar');
  }
  goToReglaListarPage(){
    this.router.navigateByUrl('home/tipo-regla-comercial/listar');
  }
  goToTipoTelefonoListarPage(){
    this.router.navigateByUrl('home/tipo-telefonos/listar');
  }
  goToClienteListarPage() {
    this.router.navigateByUrl('home/cliente/listar');
  }
  goToPedidoListarPage() {
    this.router.navigateByUrl('home/pedido/listar');
  }
  goToEmpresaListarPage() {
    this.router.navigateByUrl('home/empresa/listar');
  }
  goToVendedorListarPage() {
    this.router.navigateByUrl('home/vendedor/listar');
  }
  goToProvinciaListarPage() {
    this.router.navigateByUrl('home/provincia/listar');
  }
  goToLocalidadListarPage() {
    this.router.navigateByUrl('home/localidad/listar');
  }
  goToCategoriaListarPage() {
    this.router.navigateByUrl('home/categoria/listar');
  }
  goToAccesoListarPage() {
    this.router.navigateByUrl('home/acceso/listar');
  }
  goToAccesoPermisoListarPage() {
    this.router.navigateByUrl('home/accesoPermiso/listar');
  }
  goToDetallePedidoListarPage() {
    this.router.navigateByUrl('home/detallePedido/listar');
  }
  goToEmailListarPage() {
    this.router.navigateByUrl('home/email/listar');
  }
  goToPedidosListarPage(){
    this.router.navigateByUrl('home/pedido/listar');
  }
  goToPedidoCrearPage() {
    this.router.navigateByUrl('home/pedido/crear');
  }
  goToTelefonoListarPage() {
    this.router.navigateByUrl('home/telefono/listar');
  }
  goToProductoListarPage(){
    this.router.navigateByUrl('home/producto/listar');
  }
  goToUsuarioListarPage(){
    this.router.navigateByUrl('home/usuario/listar');
  }
  logout() {
    this.authService.logout();
  }
}
