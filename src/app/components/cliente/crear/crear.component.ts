import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Canal } from '../../../models-tipo/tipo-canal';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private clienteServices: ClienteService,
    private readonly router: Router
  ) {
    this.creado = false;
  }



  idTipoCliente: number = 0;
  idTipoCanal: number = 0;
  razonSocial: string = '';
  nombreFantasia: string = '';
  idTipoIVA: number = 0;
  CUIT: string = '';
  fechaAlta: any;
  score: string = '';
  aniosActividad: string = '';
  montoCredito: string = '';
  idVendedorAsignado: number = 0;
  calle: string = '';
  calle1: string = '';
  calle2: string = '';
  nroPuerta: string = '';
  piso: string = '';
  dpto: string = '';
  idLocalidad: number = 0;
  idProvincia: number = 0;
  CP: string = '';
  horarioAtencion: string = '';
  horarioCobranza: string = '';
  isBorrado: number = 0;
  web: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');

  ngOnInit(): void {}

  onSend() {
    const cliente = new Cliente({
      idTipoCliente : this.idTipoCliente,
      idTipoCanal : this.idTipoCanal,
      razonSocial : this.razonSocial,
      nombreFantasia : this.nombreFantasia,
      idTipoIVA : this.idTipoIVA,
      CUIT : this.CUIT,
      fechaAlta : this.fechaAlta,
      score : this.score,
      aniosActividad : this.aniosActividad,
      montoCredito : this.montoCredito,
      idVendedorAsignado : this.idVendedorAsignado,
      calle : this.calle,
      calle1 : this.calle1,
      calle2 : this.calle2,
      nroPuerta : this.nroPuerta,
      piso : this.piso,
      dpto : this.dpto,
      idLocalidad : this.idLocalidad,
      idProvincia : this.idProvincia,
      CP : this.CP,
      horarioAtencion : this.horarioAtencion,
      horarioCobranza : this.horarioCobranza,
      isBorrado : this.isBorrado,
      web : this.web,
      usuarioGraba : this.usuarioGraba
    });
    this.clienteServices.postCliente(cliente).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/cliente/listar`);
    }, 1000);
  }
}
