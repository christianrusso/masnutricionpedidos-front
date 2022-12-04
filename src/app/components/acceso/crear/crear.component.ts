import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acceso } from 'src/app/models/grupoAcceso';
import { GrupoAccesoService } from 'src/app/services/grupo-acceso.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private accesoService: GrupoAccesoService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  Descripcion: string = '';
  idGrupoAcceso: number = 0;
  usuarioGraba: any = localStorage.getItem('NickName');

  ngOnInit(): void {
  }

  onSend() {
    const acceso = new Acceso({
      Descripcion: this.Descripcion,
      usuarioGraba: this.usuarioGraba
    });
    this.accesoService.postAcceso(acceso).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/acceso/listar`);
    }, 1000);
  }

  goToListarAccesosPage(){
    this.router.navigateByUrl(`home/acceso/listar`);
  }
}
