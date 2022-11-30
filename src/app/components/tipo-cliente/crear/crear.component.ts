import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models-tipo/tipo-cliente';
import { Router } from '@angular/router';
import { TipoClienteService } from 'src/app/services/tipo-cliente.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly tipoclienteService: TipoClienteService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  Descripcion: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');

  ngOnInit(): void {}

  onSend() {
    const cliente = new Cliente({
      Descripcion: this.Descripcion,
      usuarioGraba: this.usuarioGraba,
    });
    this.tipoclienteService.postCliente(cliente).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/tipo-cliente/listar`);
    }, 1000);
  }

  goToListarTipoClientesPage(){
    this.router.navigateByUrl(`home/tipo-cliente/listar`);
  }
}
