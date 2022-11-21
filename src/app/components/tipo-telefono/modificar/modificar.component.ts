import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefonoEdit } from 'src/app/models/telefono-edit';
import { CondicionEdit } from 'src/app/models/condicion-edit';
import { TipoTelefonoService } from 'src/app/services/tipo-telefono.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute,  private readonly tipotelefonoService: TipoTelefonoService, private readonly router: Router,) { }
  creado: boolean = false;
  descripcion : string = '';
  usuarioGraba : string = '';
  fechaGraba: Date = new Date();
  usuarioModifica: string = '';


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipotelefonoService.getTelefono(this.id).subscribe((response: any) => {
      this.descripcion = response[0].descripcion;
      this.creado = false;
    });
  }


  onEdit() {
    const telefono = new TelefonoEdit({
      descripcion : this.descripcion,
      usuarioModifica : this.usuarioModifica,
    });
    this.tipotelefonoService.editTelefono(telefono, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('/tipo-telefonos/listar');
    }, 1000);
  }

}
