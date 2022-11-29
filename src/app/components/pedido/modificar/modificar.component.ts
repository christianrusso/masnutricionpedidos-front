import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Canal } from '../../../models-tipo/tipo-canal';
import { ActivatedRoute, Router } from '@angular/router';
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
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { TipoReglaComercialService } from 'src/app/services/tipo-regla-comercial.service';
import { ReglaData } from 'src/app/models-tipo/TipoReglaData';
import { TipoCondicionesVentaService } from 'src/app/services/tipo-condiciones-venta.service';
import { CondicionData } from 'src/app/models-tipo/TipoCondicionData';
import { PedidoEdit } from 'src/app/models/pedido-edit';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  creado: boolean;
  id: string = '0';
  idParseado: number = 0;
  constructor(
    private clienteServices: ClienteService,
    private readonly tipoclienteService: TipoClienteService,
    private empresaServices: EmpresaService,
    private tipocanalServices: TipoCanalService,
    private readonly tipoivaService: TipoIvaService,
    private readonly vendedorService: VendedorService,
    private readonly localidadService: LocalidadService,
    private readonly provinciaService: ProvinciaService,
    private readonly pedidoService: PedidoService,
    private readonly tipoReglaComercialService: TipoReglaComercialService,
    private readonly tipoCondicionesVentaService: TipoCondicionesVentaService,
    private route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  myControl = new UntypedFormControl();
  options: TipoClienteData[] = [];
  filteredOptions?: Observable<TipoClienteData[]>;
  selected = 'option2';



  isAnulado  : number = 0;
  isEnviadoxMail	: number = 0;
  isCobrado: number = 0;
  isFinalizado: number = 0;
  idCliente : number = 0;
  idVendedor  : number = 0;
  idTipoReglaComercial	: number = 0;
  idAbono: number = 0;
  idTipoCondicionesDeVenta: number = 0;
  fechaPedido : any = 0;
  porcDescuentoGeneral  : number = 0;
  descripcion	: string = '';
  nroRemito: string = '';
  subtotal: number = 0;
  impuestos: number = 0;
  subtotal2: number = 0;
  ivaInscriptoPorc: number = 0;
  ivaInscripto: number = 0;
  total: number = 0;
  usuarioModifica: any = localStorage.getItem('NickName');

  clienteLista: ClienteData[] = [];
  tipoCanalLista: CanalData[] = [];
  empresasLista: EmpresaData[] = [];
  ivasLista: IvaData[] = [];
  vendedoresLista: VendedorData[] = [];
  localidadesLista: LocalidadData[] = [];
  provinciasLista: ProvinciaData[] = [];
  reglasLista: ReglaData[] = [];
  condicionesLista: CondicionData[] = [];


  ngOnInit(): void {
    this.getIds();
    this.id = this.route.snapshot.params['id'];
    this.idParseado = parseInt(this.id)
    console.log(typeof(this.idParseado));

    this.pedidoService.getPedido(this.idParseado).subscribe((response: any) => {
      this.isAnulado = response[0].isAnulado
      this.isEnviadoxMail = response[0].isEnviadoxMail
      this.isCobrado = response[0].isCobrado
      this.isFinalizado = response[0].isFinalizado
      this.idCliente = response[0].idCliente
      this.idVendedor = response[0].idVendedor
      this.idTipoReglaComercial = response[0].idTipoReglaComercial
      this.idAbono = response[0].idAbono
      this.idTipoCondicionesDeVenta = response[0].idTipoCondicionesDeVenta
      this.fechaPedido = response[0].fechaPedido
      this.porcDescuentoGeneral = response[0].porcDescuentoGeneral
      this.descripcion = response[0].descripcion
      this.nroRemito = response[0].nroRemito
      this.subtotal = response[0].subtotal
      this.impuestos = response[0].impuestos
      this.subtotal2 = response[0].subtotal2
      this.ivaInscriptoPorc = response[0].ivaInscriptoPorc
      this.ivaInscripto = response[0].ivaInscripto
      this.total = response[0].total
      this.creado = false;
    });
  }

  getIds(){
    this.getidCliente();
    this.getidVendedor();
    this.getidTipoReglaComercial();
    this.getidTipoCondicionesDeVenta();
  }

  getidCliente(){
    this.clienteServices.getClientes().subscribe((response: any) => {
      const clientes = response as ClienteData[];
      clientes.forEach(element => {
        this.clienteLista.push(element);
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

  getidTipoReglaComercial(){
    this.tipoReglaComercialService.getReglas().subscribe((response: any) => {
      const reglas = response as ReglaData[];
      reglas.forEach(element => {
        this.reglasLista.push(element);
      });
    });
  }

  getidTipoCondicionesDeVenta(){
    this.tipoCondicionesVentaService.getCondiciones().subscribe((response: any) => {
      const condiciones = response as CondicionData[];
      condiciones.forEach(element => {
        this.condicionesLista.push(element);
      });
    });
  }


  onEdit() {
    console.log(typeof(this.idParseado));

    const pedido = new PedidoEdit({
      isAnulado: this.isAnulado,
      isEnviadoxMail: this.isEnviadoxMail,
      isCobrado: this.isCobrado,
      isFinalizado: this.isFinalizado,
      idCliente: this.idCliente,
      idVendedor: this.idVendedor,
      idTipoReglaComercial: this.idTipoReglaComercial,
      idAbono: this.idAbono,
      idTipoCondicionesDeVenta: this.idTipoCondicionesDeVenta,
      fechaPedido: this.fechaPedido,
      porcDescuentoGeneral: this.porcDescuentoGeneral,
      descripcion: this.descripcion,
      nroRemito: this.nroRemito,
      subtotal: this.subtotal,
      impuestos: this.impuestos,
      subtotal2: this.subtotal2,
      ivaInscriptoPorc: this.ivaInscriptoPorc,
      ivaInscripto: this.ivaInscripto,
      total: this.total,
      usuarioModifica : this.usuarioModifica
    });
    this.pedidoService.editPedido(pedido, this.idParseado).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/pedido/listar`);
    }, 1000);
  }

  goToListarPedidosPage(){
    this.router.navigateByUrl(`home/pedido/listar`);
  }
}
