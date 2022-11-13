import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  Descripcion: string = '';
  usuarioGraba: string = '';
  creado: boolean;

  constructor(private readonly clienteService: ClienteService,) {
    this.creado = false;
  }

  ngOnInit(): void {
  }

  onSend() {
    const cliente = new Cliente({
      Descripcion: this.Descripcion,
      fechaGraba: new Date(),
      usuarioGraba: this.usuarioGraba,
    });
    this.clienteService.postCliente(cliente);
    this.creado = true;
  }

}
