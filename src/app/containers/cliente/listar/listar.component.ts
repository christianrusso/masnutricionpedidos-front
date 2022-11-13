import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import {ClienteData} from '../../../models/ClienteData';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }
  elementos: any = [];

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes().subscribe((response: any) => {
      const clientes = response as ClienteData[];
      clientes.forEach(element => {
        this.elementos.push(element)
      });
    });
  }

}
