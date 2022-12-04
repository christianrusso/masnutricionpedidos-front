import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TelefonoData } from 'src/app/models-tipo/TipoTelefonoData';
import { ClienteData } from 'src/app/models/ClienteData';
import { Telefono } from 'src/app/models/telefono';
import { ClienteService } from 'src/app/services/cliente.service';
import { TelefonoService } from 'src/app/services/telefono.service';
import { TipoTelefonoService } from 'src/app/services/tipo-telefono.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly clienteService: ClienteService,
    private telefonoService: TelefonoService,
    private tipoTelefonoService: TipoTelefonoService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  descripcion: string = '';
  idCliente: number = 0;
  idTipoTelefono: number = 0;
  usuarioGraba: any = localStorage.getItem('NickName');
  clienteLista: ClienteData[] = [];

  ngOnInit(): void {
    this.getidCliente();
    this.getidTipoTelefono();
  }

  telefonosLista: TelefonoData[] = [];

  getidCliente(){
    this.clienteService.getClientes().subscribe((response: any) => {
      const clientes = response as ClienteData[];
      clientes.forEach(element => {
        this.clienteLista.push(element);
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

  onSend() {
    const telefono = new Telefono({
      idCliente: this.idCliente,
      idTipoTelefono: this.idTipoTelefono,
      descripcion: this.descripcion,
      usuarioGraba: this.usuarioGraba
    });
    this.telefonoService.postTelefono(telefono).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/telefono/listar`);
    }, 1000);
  }

  goToListarTelefonosPage(){
    this.router.navigateByUrl(`home/telefono/listar`);
  }
}
