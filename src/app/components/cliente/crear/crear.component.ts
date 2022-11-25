import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Canal } from '../../../models-tipo/tipo-canal';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteData } from 'src/app/models/ClienteData';
import { TipoClienteData } from 'src/app/models-tipo/TipoClienteData';
import { TipoClienteService } from 'src/app/services/tipo-cliente.service';
import { UntypedFormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { TipoCanalService } from 'src/app/services/tipo-canal.service';
import { CanalData } from 'src/app/models-tipo/TipoCanalData';
import { EmpresaService } from 'src/app/services/empresa.service';
import { EmpresaData } from 'src/app/models/EmpresaData';
import { TipoIvaService } from 'src/app/services/tipo-iva.service';
import { IvaData } from 'src/app/models-tipo/TipoIvaData';
import { VendedorService } from 'src/app/services/vendedor.service';
import { VendedorData } from 'src/app/models/VendedorData';
import { LocalidadService } from 'src/app/services/localidad.service';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { LocalidadData } from 'src/app/models/LocalidadData';
import { ProvinciaData } from 'src/app/models/ProvinciaData';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private clienteServices: ClienteService,
    private readonly tipoclienteService: TipoClienteService,
    private empresaServices: EmpresaService,
    private tipocanalServices: TipoCanalService,
    private readonly tipoivaService: TipoIvaService,
    private readonly vendedorService: VendedorService,
    private readonly localidadService: LocalidadService,
    private readonly provinciaService: ProvinciaService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  myControl = new UntypedFormControl();
  options: TipoClienteData[] = [];
  filteredOptions?: Observable<TipoClienteData[]>;
  selected = 'option2';



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

  tipoClienteLista: TipoClienteData[] = [];
  tipoCanalLista: CanalData[] = [];
  empresasLista: EmpresaData[] = [];
  ivasLista: IvaData[] = [];
  vendedoresLista: VendedorData[] = [];
  localidadesLista: LocalidadData[] = [];
  provinciasLista: ProvinciaData[] = [];

  ngOnInit(): void {
    this.getIds();
  }

  getIds(){
    this.getidTipoCliente();
    this.getidTipoCanal();
    this.getidRazonSocial();
    this.getidTipoIva();
    this.getidVendedor();
    this.getidLocalidad();
    this.getidProvincia();
  }

  getidTipoCliente(){
    this.tipoclienteService.getClientes().subscribe((response: any) => {
      const clientes = response as TipoClienteData[];
      clientes.forEach(element => {
        this.tipoClienteLista.push(element);
        this.options.push(element);
      });
    });
  }

  getidTipoCanal(){
    this.tipocanalServices.getCanales().subscribe((response: any) => {
      const canales = response as CanalData[];
      canales.forEach(element => {
        this.tipoCanalLista.push(element);
      });
    });
  }

  getidRazonSocial(){
    this.empresaServices.getEmpresas().subscribe((response: any) => {
      const empresas = response as EmpresaData[];
      empresas.forEach(element => {
        this.empresasLista.push(element);
      });
    });
  }

  getidTipoIva(){
    this.tipoivaService.getIVAs().subscribe((response: any) => {
      const ivas = response as IvaData[];
      ivas.forEach(element => {
        this.ivasLista.push(element);
      });
    });
  }

  getidVendedor(){
    this.vendedorService.getVendedores().subscribe((response: any) => {
      const vendedores = response as VendedorData[];
      vendedores.forEach(element => {
        this.vendedoresLista.push(element);
      });
    });
  }

  getidLocalidad(){
    this.localidadService.getLocalidades().subscribe((response: any) => {
      const localidades = response as LocalidadData[];
      localidades.forEach(element => {
        this.localidadesLista.push(element);
      });
    });
  }

  getidProvincia(){
    this.provinciaService.getProvincias().subscribe((response: any) => {
      const provincias = response as ProvinciaData[];
      provincias.forEach(element => {
        this.provinciasLista.push(element);
      });
    });
  }


  onSend() {
    const cliente = new Cliente({
      idTipoCliente : this.idTipoCliente,
      idTipoCanal : this.idTipoCanal,
      razonSocial : this.razonSocial,
      nombreFantasia : this.nombreFantasia,
      idTipoIVA : this.idTipoIVA,
      CUIT : this.CUIT,
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

  goToListarClientesPage(){
    this.router.navigateByUrl(`home/cliente/listar`);
  }
}
