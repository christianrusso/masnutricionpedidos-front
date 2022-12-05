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
  nickname: any;
  constructor(private router: Router, private readonly authService: AuthService) {}

  @ViewChild('sidenav')
  sidenav?: MatSidenav;
  ngOnInit(): void {
    this.nickname = localStorage.getItem('NickName')
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };

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
  goToOperacionListarPage() {
    this.router.navigateByUrl('home/operacion/listar');
  }
  goToTelefonoListarPage() {
    this.router.navigateByUrl('home/telefono/listar');
  }
  goToProductoListarPage(){
    this.router.navigateByUrl('home/producto/listar');
  }
  logout() {
    this.authService.logout();
  }
}
