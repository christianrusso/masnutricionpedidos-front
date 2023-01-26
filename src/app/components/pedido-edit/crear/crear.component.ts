import { Component, OnInit, ViewChild } from '@angular/core';
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
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductoPedidoData } from 'src/app/models/ProductosPedidoData';
import { DetallePedidoCargaData } from 'src/app/models/DetallePedidoCarga';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaProductoData } from 'src/app/models/categoriaProductoData';
import { CategoriaProductoService } from 'src/app/services/categoria-producto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  idParseado: number = 0;
  dataSourceCarrito: MatTableDataSource<ProductoPedidoData> =
    new MatTableDataSource();
  constructor(
    private readonly pedidoService: PedidoService,
    private readonly productoService: ProductoService,
    private readonly categoriaService: CategoriaProductoService,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) {
    this.creado = false;
  }
  displayedColumnsDetallesPedidos: string[] = [
    'categoria',
    'producto',
    'cantidad',
    'condicion',
    'agregar',
  ];
  categoria!: string;
  producto!: string;
  cantidad!: number;
  condicion!: string;
  productos: DetallePedidoCargaData[] = [];
  idProducto!: number;

  displayedColumnsProductoPedido: string[] = [
    'codigo',
    'descripcion',
    'precio',
    'cantidad',
    'unidades_bulto',
    'pallets',
    'condicion',
    'total',
    'modificar',
    'eliminar',
  ];

  dataSourceDetallesPedidos = new MatTableDataSource<DetallePedidoCargaData>();
  dataSourceProductoPedido = new MatTableDataSource<ProductoPedidoData>();
  productosEnCarrito: ProductoPedidoData[] = [];
  listaProductos: ProductoPedidoData[] = [];
  listaCategoria: CategoriaProductoData[] = [];
  id!: number;
  codigo!: number;
  descripcion!: string;
  precioReferencia!: number;
  unidades_bulto!: number;
  pallets!: number;
  total: number = 0;
  total_final: number = 0;
  cantidadNueva: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  myControl = new UntypedFormControl();
  options: TipoClienteData[] = [];
  filteredOptions?: Observable<TipoClienteData[]>;
  selected = 'option2';

  isAnulado: number = 0;
  isEnviadoxMail!: number;
  isCobrado!: number;
  isFinalizado!: number;
  idCliente!: number;
  idVendedor!: number;
  idTipoReglaComercial!: number;
  idAbono!: number;
  idTipoCondicionesDeVenta!: number;
  num_interno!: number;
  representante!: string;
  cod!: number;
  cuit!: number;
  domicilio!: string;
  telefono!: number;
  transporte!: string;
  observaciones!: string;
  fechaPedido!: any;
  porcDescuentoGeneral!: number;
  nroRemito: string = '';
  subtotal!: number;
  impuestos!: number;
  subtotal2!: number;
  ivaInscriptoPorc!: number;
  ivaInscripto!: number;
  usuarioGraba: any = localStorage.getItem('NickName');

  ngOnInit(): void {
    this.getProductos();
    this.getCategorias()
    this.id = this.route.snapshot.params['id'];
    this.pedidoService.getPedido(this.id).subscribe((response: any) => {
      this.isAnulado = response[0].isAnulado;
      this.isEnviadoxMail = response[0].isEnviadoxMail;
      this.isCobrado = response[0].isCobrado;
      this.isFinalizado = response[0].isFinalizado;
      this.idCliente = response[0].idCliente;
      this.idVendedor = response[0].idVendedor;
      this.idTipoReglaComercial = response[0].idTipoReglaComercial;
      this.idAbono = response[0].idAbono;
      this.idTipoCondicionesDeVenta = response[0].idTipoCondicionesDeVenta;
      this.fechaPedido = response[0].fechaPedido;
      this.porcDescuentoGeneral = response[0].porcDescuentoGeneral;
      this.descripcion = response[0].descripcion;
      this.nroRemito = response[0].nroRemito;
      this.subtotal = response[0].subtotal;
      this.impuestos = response[0].impuestos;
      this.subtotal2 = response[0].subtotal2;
      this.ivaInscriptoPorc = response[0].ivaInscriptoPorc;
      this.ivaInscripto = response[0].ivaInscripto;
      this.total = response[0].total;
      this.creado = false;
    });
  }

  getProductos() {
    this.productoService.getProductos().subscribe((response: any) => {
      const productos = response as ProductoPedidoData[];
      productos.forEach((e) => {
        this.listaProductos.push({
          id_producto: e.id_producto,
          descripcion: e.descripcion,
          precioReferencia: e.precioReferencia,
          cantidad: e.cantidad,
          porcRelacionPallet: e.porcRelacionPallet,
          unidadesFijasPallet: e.unidadesFijasPallet,
          condicion: e.condicion,
          total: e.total,
          codigo: e.codigo,
          categoria: 0,
        });
      });
    });
  }
  getCategorias() {
    this.categoriaService.getCategorias().subscribe((response: any) => {
      const categorias = response as CategoriaProductoData[];
      categorias.forEach((e) => {
        this.listaCategoria.push({
          descripcion: e.descripcion,
          idCategoriaProducto: e.idCategoriaProducto
        });
      });
      console.log(this.listaProductos);

    });
  }
  agregarElemento() {
    console.log(this.listaProductos);

    this.productos.push({
      cantidad: this.cantidad,
      categoria: this.categoria,
      id_producto: this.idProducto,
      condicion: this.condicion,
    })
    if (!this.cantidad) {
      this.cantidad = 1;
    }
    if (!this.total_final) {
      this.total_final = 0;
    }
    console.log(this.productos);

    const miProducto = this.listaProductos.filter(p => p.id_producto == this.idProducto)
    console.log(miProducto);

    // this.idProducto = e.id_producto;
    // this.descripcion = e.descripcion;
    // this.precioReferencia = e.precioReferencia;
    // this.unidades_bulto = e.porcRelacionPallet;
    // this.pallets = e.unidadesFijasPallet;
    // this.condicion = e.condicion
    this.total = this.cantidad * this.precioReferencia;
    this.productosEnCarrito.push({
      id_producto: miProducto[0].id_producto,
      precioReferencia: miProducto[0].precioReferencia,
      cantidad: this.cantidad,
      descripcion: miProducto[0].descripcion,
      total: miProducto[0].precioReferencia * this.cantidad,
      porcRelacionPallet: miProducto[0].porcRelacionPallet,
      unidadesFijasPallet: miProducto[0].unidadesFijasPallet,
      condicion: this.condicion,
      codigo: miProducto[0].codigo,
      categoria:miProducto[0].categoria,
    });
    console.log(this.productosEnCarrito);

    this.dataSourceProductoPedido = new MatTableDataSource<ProductoPedidoData>(
      this.productosEnCarrito
    );
  }
  eliminarElemento(producto: ProductoPedidoData) {

    const indice = this.productosEnCarrito.findIndex(
      (p) => p.id_producto == producto.id_producto
    );
    this.productosEnCarrito.splice(indice, 1);
    this.productosEnCarrito = [...this.productosEnCarrito];
    this.dataSourceProductoPedido = new MatTableDataSource<ProductoPedidoData>(
      this.productosEnCarrito
    );
    if (!producto.cantidad) {
      producto.cantidad = 1;
    }
    if (producto.precioReferencia) {
      this.total_final -= +producto.precioReferencia * producto.cantidad;
      this.total = +producto.precioReferencia * producto.cantidad;
      this.total_final = Number(this.total_final.toFixed());
      this.total = Number(this.total.toFixed());
    }
  }

  onSend() {
    const pedido = new Pedido({
      isAnulado: this.isAnulado || 0,
      isEnviadoxMail: this.isEnviadoxMail || 0,
      isCobrado: this.isCobrado || 0,
      isFinalizado: this.isFinalizado || 0,
      idCliente: this.idCliente || 0,
      idVendedor: this.idVendedor || 0,
      idTipoReglaComercial: this.idTipoReglaComercial || 0,
      idAbono: this.idAbono || 0,
      idTipoCondicionesDeVenta: this.idTipoCondicionesDeVenta || 0,
      num_interno: this.num_interno,
      representante: this.representante,
      cod: this.cod,
      cuit: this.cuit,
      domicilio: this.domicilio,
      telefono: this.telefono,
      transporte: this.transporte,
      observaciones: this.observaciones,
      fechaPedido: this.fechaPedido,
      porcDescuentoGeneral: this.porcDescuentoGeneral || 0,
      descripcion: this.descripcion || '',
      nroRemito: this.nroRemito || '',
      subtotal: this.subtotal || 0,
      impuestos: this.impuestos || 0,
      subtotal2: this.subtotal2 || 0,
      ivaInscriptoPorc: this.ivaInscriptoPorc || 0,
      ivaInscripto: this.ivaInscripto || 0,
      total: this.total,
      usuarioGraba: this.usuarioGraba,
    });
    this.pedidoService.postPedido(pedido, this.productosEnCarrito).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/pedido/listar`);
    }, 1000);
  }

  goToListarPedidosPage() {
    this.router.navigateByUrl(`home/pedido/listar`);
  }
  goToEditPage(idEmpresa: number) {
    this.router.navigateByUrl(`home/empresa/modificar/${idEmpresa}`);
  }
}
