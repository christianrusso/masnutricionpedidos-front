import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PermisoEdit } from 'src/app/models-tipo/tipo-permiso-edit';
import { TipoPermisoService } from 'src/app/services/tipo-permiso.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private readonly tipopermisoService: TipoPermisoService, private readonly router: Router,) { }
  creado: boolean = false;
  Descripcion : string = '';
  usuarioModifica: any = localStorage.getItem('NickName');


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipopermisoService.getPermiso(this.id).subscribe((response: any) => {
      this.Descripcion = response[0].Descripcion;
      this.creado = false;
    });
  }


  onEdit() {
    const permiso = new PermisoEdit({
      Descripcion : this.Descripcion,
      usuarioModifica : this.usuarioModifica,
    });
    this.tipopermisoService.editPermiso(permiso, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/tipo-permisos/listar');
    }, 1000);
  }

  goToListarTipoPermisoPage(){
    this.router.navigateByUrl(`home/tipo-permisos/listar`);
  }

}
