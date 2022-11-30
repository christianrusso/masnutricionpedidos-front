import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CondicionEdit } from 'src/app/models-tipo/tipo-condicion-edit';
import { TipoCondicionesVentaService } from 'src/app/services/tipo-condiciones-venta.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private readonly tipocondicionService: TipoCondicionesVentaService, private readonly router: Router,) { }
  creado: boolean = false;
  descripcion : string = '';
  usuarioModifica: any = localStorage.getItem('NickName');


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipocondicionService.getCondicion(this.id).subscribe((response: any) => {
      this.descripcion = response[0].descripcion;
      this.creado = false;
    });
  }


  onEdit() {
    const condicion = new CondicionEdit({
      descripcion : this.descripcion,
      usuarioModifica : this.usuarioModifica,
    });
    this.tipocondicionService.editCondicion(condicion, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/tipo-condiciones/listar');
    }, 1000);
  }

  goToListarTipoCondicionesPage(){
    this.router.navigateByUrl(`home/tipo-condiciones/listar`);
  }

}
