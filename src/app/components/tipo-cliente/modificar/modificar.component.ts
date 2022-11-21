import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteEdit } from 'src/app/models/cliente-edit';
import { TipoClienteService } from 'src/app/services/tipo-cliente.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private readonly tipoclienteService: TipoClienteService, private readonly router: Router,) { }
  creado: boolean = false;
  Descripcion : string = '';
  usuarioGraba : string = '';
  fechaGraba: Date = new Date();
  usuarioModifica: string = '';


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipoclienteService.getCliente(this.id).subscribe((response: any) => {
      this.Descripcion = response[0].Descripcion;
      this.creado = false;
    });
  }


  onEdit() {
    const cliente = new ClienteEdit({
      Descripcion : this.Descripcion,
      usuarioModifica : this.usuarioModifica,
    });
    this.tipoclienteService.editCliente(cliente, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('/tipo-cliente/listar');
    }, 1000);
  }

}
