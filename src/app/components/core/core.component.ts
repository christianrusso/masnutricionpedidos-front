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
import { AuthService } from 'src/app/services/auth.service';

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
  nickname: any = 'asd';
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
  goToCanalCrearPage() {

    this.router.navigateByUrl('home/tipo-canal/crear');
  }

  goToTipoClienteListarPage() {

    this.router.navigateByUrl('home/tipo-cliente/listar');
  }
  goToTipoClienteCrearPage() {

    this.router.navigateByUrl('home/tipo-cliente/crear');
  }

  goToCondicionesListarPage(){

    this.router.navigateByUrl('home/tipo-condiciones/listar');
  }
  goToCondicionesCrearPage(){

    this.router.navigateByUrl('home/tipo-condiciones/crear');
  }


  goToFamiliaListarPage(){

    this.router.navigateByUrl('home/tipo-familia-producto/listar');
  }
  goToFamiliaCrearPage(){

    this.router.navigateByUrl('home/tipo-familia-producto/crear');
  }
  goToIVAListarPage(){

    this.router.navigateByUrl('home/tipo-iva/listar');
  }
  goToIVACrearPage(){

    this.router.navigateByUrl('home/tipo-iva/crear');
  }
  goToPermisoListarPage(){

    this.router.navigateByUrl('home/tipo-permisos/listar');
  }
  goToPermisoCrearPage(){

    this.router.navigateByUrl('home/tipo-permisos/crear');
  }
  goToProductosListarPage(){

    this.router.navigateByUrl('home/tipo-productos/listar');
  }
  goToProductosCrearPage(){

    this.router.navigateByUrl('home/tipo-productos/crear');
  }
  goToReglaListarPage(){

    this.router.navigateByUrl('home/tipo-regla-comercial/listar');
  }
  goToReglaCrearPage(){

    this.router.navigateByUrl('home/tipo-regla-comercial/crear');
  }
  goToTelefonoListarPage(){

    this.router.navigateByUrl('home/tipo-telefonos/listar');
  }
  goToTelefonoCrearPage(){

    this.router.navigateByUrl('home/tipo-telefonos/crear');
  }

  goToClienteListarPage() {

    this.router.navigateByUrl('home/cliente/listar');
  }
  goToClienteCrearPage() {

    this.router.navigateByUrl('home/cliente/crear');
  }
  goToPedidoListarPage() {

    this.router.navigateByUrl('home/pedido/listar');
  }
  goToPedidoCrearPage() {

    this.router.navigateByUrl('home/pedido/crear');
  }
  logout() {
    this.authService.logout();
  }
}
