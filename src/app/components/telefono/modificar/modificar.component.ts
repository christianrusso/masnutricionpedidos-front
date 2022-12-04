import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteData } from 'src/app/models/ClienteData';
import { ClienteService } from 'src/app/services/cliente.service';
import { TelefonoService } from 'src/app/services/telefono.service';
import { TipoTelefonoService } from 'src/app/services/tipo-telefono.service';
import { TelefonoData } from 'src/app/models-tipo/TipoTelefonoData';
import { TelefonoEdit } from 'src/app/models/telefono-edit';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private readonly clienteService: ClienteService,
    private telefonoService: TelefonoService,
    private tipoTelefonoService: TipoTelefonoService,
    private readonly router: Router
  ) {}
  creado: boolean = false;
  descripcion: string = '';
  idCliente: number = 0;
  idTipoTelefono: number = 0;
  clientesLista: ClienteData[] = [];
  telefonosLista: TelefonoData[] = [];
  usuarioModifica: any = localStorage.getItem('NickName');

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getidCliente();
    this.getidTipoTelefono();
    this.telefonoService.getTelefono(this.id).subscribe((response: any) => {
      this.idCliente = response[0].idCliente;
      this.idTipoTelefono = response[0].idTipoTelefono;
      this.descripcion = response[0].descripcion;
      this.creado = false;
    });
  }

  getidCliente() {
    this.clienteService.getClientes().subscribe((response: any) => {
      const clientes = response as ClienteData[];
      clientes.forEach((element) => {
        this.clientesLista.push(element);
      });
    });
  }

  getidTipoTelefono(){
    this.tipoTelefonoService.getTelefonos().subscribe((response: any) => {
      const telefonos = response as TelefonoData[];
      telefonos.forEach(element => {
        this.telefonosLista.push(element);
      });
    });
  }

  onEdit() {
    const telefono = new TelefonoEdit({
      idCliente: this.idCliente,
      idTipoTelefono: this.idTipoTelefono,
      descripcion: this.descripcion,
      usuarioModifica: this.usuarioModifica
    });
    this.telefonoService
      .editTelefono(telefono, this.id)
      .subscribe((response) => {
        return response;
      });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/telefono/listar');
    }, 1000);
  }

  goToListarTelefonosPage(){
    this.router.navigateByUrl(`home/telefono/listar`);
  }
}
