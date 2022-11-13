import { Component, OnInit } from '@angular/core';
import { Permiso } from 'src/app/models/permiso';
import { PermisoService } from 'src/app/services/permiso.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  Descripcion: string = '';
  usuarioGraba: string = '';
  creado: boolean;

  constructor(private readonly permisoService: PermisoService,) {
    this.creado = false;
  }

  ngOnInit(): void {
  }

  onSend() {
    const permiso = new Permiso({
      Descripcion: this.Descripcion,
      fechaGraba: new Date(),
      usuarioGraba: this.usuarioGraba,
    });
    this.permisoService.postPermiso(permiso);
    this.creado = true;
  }

}
