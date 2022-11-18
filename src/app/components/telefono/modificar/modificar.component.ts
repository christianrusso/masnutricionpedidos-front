import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefonoEdit } from 'src/app/models/telefono-edit';
import { CondicionEdit } from 'src/app/models/condicion-edit';
import { TelefonoService } from 'src/app/services/telefono.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute,  private readonly telefonoService: TelefonoService, private readonly router: Router,) { }
  creado: boolean = false;
  descripcion : string = '';
  usuarioGraba : string = '';
  fechaGraba: Date = new Date();
  usuarioModifica: string = '';


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.telefonoService.getTelefono(this.id).subscribe((response: any) => {
      console.log(response);

      this.descripcion = response[0].descripcion;
      this.usuarioGraba = response[0].usuarioGraba;
      this.fechaGraba = response[0].fechaGraba;
      this.usuarioModifica = response[0].usuarioModifica;
      this.creado = false;
      //otrod
    });
  }


  onEdit() {
    const telefono = new TelefonoEdit({
      descripcion : this.descripcion,
      fechaGraba : this.fechaGraba,
      usuarioGraba : this.usuarioGraba,
      fechaModifica : new Date(),
      usuarioModifica : this.usuarioModifica,
    });
    this.telefonoService.editTelefono(telefono, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('/telefonos/listar');
    }, 1000);
  }

}
