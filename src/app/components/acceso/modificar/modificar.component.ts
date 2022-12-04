import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccesoEdit } from 'src/app/models/grupoAcceso-edit';
import { GrupoAccesoService } from 'src/app/services/grupo-acceso.service';

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
    private readonly router: Router
  ) {}
  creado: boolean = false;
  Descripcion: string = '';
  usuarioModifica: any = localStorage.getItem('NickName');

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.accesoService.getAcceso(this.id).subscribe((response: any) => {
      this.Descripcion = response[0].Descripcion;
      this.creado = false;
    });
  }

  onEdit() {
    const acceso = new AccesoEdit({
      Descripcion: this.Descripcion,
      usuarioModifica: this.usuarioModifica
    });
    this.accesoService
      .editAcceso(acceso, this.id)
      .subscribe((response) => {
        return response;
      });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/acceso/listar');
    }, 1000);
  }

  goToListarAccesosPage(){
    this.router.navigateByUrl(`home/acceso/listar`);
  }
}
