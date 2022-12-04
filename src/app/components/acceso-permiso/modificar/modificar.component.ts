import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoAccesoService } from 'src/app/services/grupo-acceso.service';
import { GrupoAccesoPermisoService } from 'src/app/services/grupo-acceso-permiso.service';
import { GrupoAccesoData } from 'src/app/models/GrupoAccesoData';
import { PermisoData } from 'src/app/models-tipo/TipoPermisoData';
import { TipoPermisoService } from 'src/app/services/tipo-permiso.service';
import { AccesoPermisoEdit } from 'src/app/models/grupoAccesoPermiso-edit';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private readonly accesoService: GrupoAccesoService,
    private accesoPermisoService: GrupoAccesoPermisoService,
    private readonly tipopermisoService: TipoPermisoService,
    private readonly router: Router
  ) {}
  creado: boolean = false;
  idGrupoAcceso: number = 0;
  idTipoPermiso: number = 0;
  usuarioModifica: any = localStorage.getItem('NickName');
  accesosLista: GrupoAccesoData[] = [];
  tipoPermisoLista: PermisoData[] = [];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.accesoPermisoService.getAccesoPermiso(this.id).subscribe((response: any) => {
      this.idGrupoAcceso = response[0].idGrupoAcceso;
      this.idTipoPermiso = response[0].idTipoPermiso;
      this.creado = false;
    });
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


  onEdit() {
    const accesoPermiso = new AccesoPermisoEdit({
      idGrupoAcceso: this.idGrupoAcceso,
      idTipoPermiso: this.idTipoPermiso,
      usuarioModifica: this.usuarioModifica
    });
    this.accesoPermisoService
      .editAccesoPermiso(accesoPermiso, this.id)
      .subscribe((response) => {
        return response;
      });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/accesoPermiso/listar');
    }, 1000);
  }

  goToListarAccesosPermisoPage(){
    this.router.navigateByUrl(`home/accesoPermiso/listar`);
  }
}
