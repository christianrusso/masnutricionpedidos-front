import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteEdit } from 'src/app/models/cliente-edit';
import { CondicionEdit } from 'src/app/models/condicion-edit';
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
  usuarioGraba : string = '';
  fechaGraba: Date = new Date();
  usuarioModifica: string = '';


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
      this.router.navigateByUrl('/tipo-condiciones/listar');
    }, 1000);
  }

}
