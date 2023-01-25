import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
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
import { MatSelect } from '@angular/material/select';
import * as moment from 'moment';
import { response } from 'express';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {

  creado: boolean;
  dataSourceCarrito: MatTableDataSource<ProductoPedidoData> =
  new MatTableDataSource();
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
    'actions',
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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
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
  @ViewChild('scroll') scroll: ElementRef;
  @ViewChild('productTable') productTable: ElementRef;
  editProductInput: ProductoPedidoData = {
    id_producto: 0,
    descripcion: '',
    precioReferencia: 0,
    cantidad: 0,
    porcRelacionPallet: 0,
    unidadesFijasPallet: 0,
    condicion: '',
    codigo: 0,
    total: 0,
    categoria: 0
  };

  constructor(
    private readonly pedidoService: PedidoService,
    private readonly productoService: ProductoService,
    private readonly categoriaService: CategoriaProductoService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  ngOnInit(): void {
    this.getProductos();
    this.getCategorias();
  }

  getProductos() {
    this.productoService.getProductos().subscribe((response: any) => {
      const productos = response as ProductoPedidoData[];
      productos.forEach((e) => {
        this.listaProductos.push({
          ...e
        });
      });
    });
  };

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((response: any) => {
      const categorias = response as CategoriaProductoData[];
      categorias.forEach((e) => {
        this.listaCategoria.push({
          descripcion: e.descripcion,
          idCategoriaProducto: e.idCategoriaProducto
        });
      });
    });
  };

  addProduct(newProduct: ProductoPedidoData): void {
    const ele = this.productosEnCarrito.findIndex(e => e.codigo === newProduct.codigo);
    if(ele === -1) {
      this.productosEnCarrito.push(newProduct);
      this.dataSourceProductoPedido = new MatTableDataSource<ProductoPedidoData>(
        this.productosEnCarrito
      );
    } else {
      this.productosEnCarrito[ele].cantidad = newProduct.cantidad;
      this.productosEnCarrito[ele].total = this.productosEnCarrito[ele].cantidad * Number(newProduct.precioReferencia);
      this.productosEnCarrito[ele].condicion = newProduct.condicion;
    }
    this.scroll.nativeElement.scrollIntoView({behavior: 'smooth'});

  };

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
  };

  onSend(orderInfo: any) {
    this.productosEnCarrito.forEach((e) => {
      this.total = this.total += e.total
    });
    if(this.productosEnCarrito.length !== 0){
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
      num_interno: orderInfo.internNumber,
      representante: orderInfo.agent,
      cod: orderInfo.cod,
      cuit: orderInfo.cuit,
      domicilio: orderInfo.address,
      telefono: orderInfo.phone,
      transporte: orderInfo.transport,
      observaciones: orderInfo.observation,
      fechaPedido: moment(orderInfo.date).format('DD/MM/YYYY'),
      porcDescuentoGeneral: this.porcDescuentoGeneral,
      descripcion: this.descripcion,
      nroRemito: this.nroRemito,
      subtotal: this.subtotal,
      impuestos: this.impuestos,
      subtotal2: this.subtotal2,
      ivaInscriptoPorc: this.ivaInscriptoPorc || 0,
      ivaInscripto: this.ivaInscripto || 0,
      total: this.total,
      usuarioGraba: this.usuarioGraba,
      });
      this.pedidoService.postPedido(pedido, this.productosEnCarrito).subscribe(
        (response) => {
          this.router.navigateByUrl(`home/detallePedido/listar`);
        },
        (error) => {
            console.log(error);
        }
      );
      this.creado = true;
    }
  };

  editProduct(productId: ProductoPedidoData): void {
    this.editProductInput = {
      ...productId
    }
    this.productTable.nativeElement.scrollIntoView({behavior: 'smooth'});
  };
};

