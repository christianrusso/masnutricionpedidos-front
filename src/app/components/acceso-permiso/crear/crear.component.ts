import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermisoData } from 'src/app/models-tipo/TipoPermisoData';
import { GrupoAccesoData } from 'src/app/models/GrupoAccesoData';
import { AccesoPermiso } from 'src/app/models/grupoAccesoPermiso';
import { GrupoAccesoPermisoService } from 'src/app/services/grupo-acceso-permiso.service';
import { GrupoAccesoService } from 'src/app/services/grupo-acceso.service';
import { TipoPermisoService } from 'src/app/services/tipo-permiso.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private accesoPermisoService: GrupoAccesoPermisoService,
    private readonly accesoService: GrupoAccesoService,
    private readonly tipopermisoService: TipoPermisoService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  idGrupoAcceso: number = 0;
  idTipoPermiso: number = 0;
  usuarioGraba: any = localStorage.getItem('NickName');
  accesosLista: GrupoAccesoData[] = [];
  tipoPermisoLista: PermisoData[] = [];

  ngOnInit(): void {
    this.getidGrupoAcceso();
    this.getidTipoPermiso();
  }

  getidGrupoAcceso(){
    this.accesoService.getAccesos().subscribe((response: any) => {
      const accesos = response as GrupoAccesoData[];
      accesos.forEach(element => {
        this.accesosLista.push(element);
      });
    });
  }

  getidTipoPermiso(){
    this.tipopermisoService.getPermisos().subscribe((response: any) => {
      const permisos = response as PermisoData[];
      permisos.forEach(element => {
        this.tipoPermisoLista.push(element);
      });
    });
  }

  onSend() {
    const accesoPermiso = new AccesoPermiso({
      idGrupoAcceso : this.idGrupoAcceso,
      idTipoPermiso : this.idTipoPermiso,
      usuarioGraba: this.usuarioGraba
    });
    this.accesoPermisoService.postAccesoPermiso(accesoPermiso).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/accesoPermiso/listar`);
    }, 1000);
  }

  goToListarAccesosPermisoPage(){
    this.router.navigateByUrl(`home/accesoPermiso/listar`);
  }
}
