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
    this.router.navigateByUrl('/tipo-canal/listar');
  }
  goToCanalCrearPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-canal/crear');
  }

  goToClienteListarPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-cliente/listar');
  }
  goToClienteCrearPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-cliente/crear');
  }

  goToCondicionesListarPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-condiciones/listar');
  }
  goToCondicionesCrearPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-condiciones/crear');
  }


  goToFamiliaListarPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-familia-producto/listar');
  }
  goToFamiliaCrearPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-familia-producto/crear');
  }
  goToIVAListarPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-iva/listar');
  }
  goToIVACrearPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-iva/crear');
  }
  goToPermisoListarPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-permisos/listar');
  }
  goToPermisoCrearPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-permisos/crear');
  }
  goToProductosListarPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-productos/listar');
  }
  goToProductosCrearPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-productos/crear');
  }
  goToReglaListarPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-regla-comercial/listar');
  }
  goToReglaCrearPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-regla-comercial/crear');
  }
  goToTelefonoListarPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-telefonos/listar');
  }
  goToTelefonoCrearPage(){
    this.sidenav?.toggle();
    this.router.navigateByUrl('/tipo-telefonos/crear');
  }
  logout() {
    // this.authService.logout();
  }
}
