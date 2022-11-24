import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefonoEdit } from 'src/app/models-tipo/tipo-telefono-edit';
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
  usuarioModifica: any = localStorage.getItem('NickName');


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
      this.router.navigateByUrl('home/tipo-telefonos/listar');
    }, 1000);
  }

}
