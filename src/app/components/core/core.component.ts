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
  constructor(private router: Router) {}

  @ViewChild('sidenav')
  sidenav?: MatSidenav;
  ngOnInit(): void {}
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };

  goToCanalListarPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/canal/listar');
  }
  goToCanalCrearPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/canal/crear');
  }
  goToClientePage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/masnutricion/cliente');
  }

  goToTelefonoPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/masnutricion/telefono');
  }

  goToCondicionesPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/masnutricion/condiciones-de-venta');
  }

  goToFamiliaPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/masnutricion/familia-producto');
  }

  goToIvaPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/masnutricion/iva');
  }
  goToPermisoPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/masnutricion/permiso');
  }

  goToProductosPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/masnutricion/productos');
  }
  goToReglaComercialPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/masnutricion/regla-comercial');
  }

  logout() {
    // this.authService.logout();
  }
}
