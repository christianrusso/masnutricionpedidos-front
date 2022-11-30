import { Component, OnInit } from '@angular/core';
import { Permiso } from '../../../models-tipo/tipo-permiso';
import { Router } from '@angular/router';
import { TipoPermisoService } from 'src/app/services/tipo-permiso.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly tipopermisoService: TipoPermisoService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  Descripcion: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');

  ngOnInit(): void {}

  onSend() {
    const permiso = new Permiso({
      Descripcion: this.Descripcion,
      usuarioGraba: this.usuarioGraba,
    });
    this.tipopermisoService.postPermiso(permiso).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/tipo-permisos/listar`);
    }, 1000);
  }

  goToListarTipoPermisoPage(){
    this.router.navigateByUrl(`home/tipo-permisos/listar`);
  }
}
