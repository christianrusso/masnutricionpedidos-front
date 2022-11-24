import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteEdit } from 'src/app/models/cliente-edit';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private clienteServices: ClienteService, private readonly router: Router,) { }
  creado: boolean = false;
  usuarioModifica: any = localStorage.getItem('NickName');


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


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteServices.getCliente(this.id).subscribe((response: any) => {
      this.idTipoCliente = response[0].idTipoCliente;
      this.idTipoCanal = response[0].idTipoCanal;
      this.razonSocial = response[0].razonSocial;
      this.nombreFantasia = response[0].nombreFantasia;
      this.idTipoIVA = response[0].idTipoIVA;
      this.CUIT = response[0].CUIT;
      this.fechaAlta = response[0].fechaAlta;
      this.score = response[0].score;
      this.aniosActividad = response[0].aniosActividad;
      this.montoCredito = response[0].montoCredito;
      this.idVendedorAsignado = response[0].idVendedorAsignado;
      this.calle = response[0].calle;
      this.calle1 = response[0].calle1;
      this.calle2 = response[0].calle2;
      this.nroPuerta = response[0].nroPuerta;
      this.piso = response[0].piso;
      this.dpto = response[0].dpto;
      this.idLocalidad = response[0].idLocalidad;
      this.idProvincia = response[0].idProvincia;
      this.CP = response[0].CP;
      this.horarioAtencion = response[0].horarioAtencion;
      this.horarioCobranza = response[0].horarioCobranza;
      this.isBorrado = response[0].isBorrado;
      this.web = response[0].web;
      this.creado = false;
    });
  }


  onEdit() {
    const cliente = new ClienteEdit({
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
      usuarioModifica : this.usuarioModifica,
    });
    this.clienteServices.editCliente(cliente, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/cliente/listar');
    }, 1000);
  }

}
