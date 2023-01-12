import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoData } from 'src/app/models/PedidoData';
import { PedidoService } from 'src/app/services/pedido.service';
import { DetallePedidoService } from 'src/app/services/detalle-pedido.service';
import { DetallePedidoEdit } from 'src/app/models/detallePedido-edit';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaProductoService } from 'src/app/services/categoria-producto.service';
import { ProductoPedidoData } from 'src/app/models/ProductosPedidoData';
import { CategoriaProductoData } from 'src/app/models/categoriaProductoData';
import { MatTableDataSource } from '@angular/material/table';
import { DetallePedidoCargaData } from 'src/app/models/DetallePedidoCarga';
import * as moment from 'moment';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {

  @ViewChild('scroll') scroll: ElementRef;
  id: number = 0;
  creado: boolean = false;
  idPedido: number = 0;
  cantidad!: number;
  detalle: string = '';
  porcDescuentoItem!: number;
  precioUnitario!: number;
  importe!: number;
  isEntregadoItem!: number;
  pedidosLista: PedidoData[] = [];
  usuarioModifica: any = localStorage.getItem('NickName');
  listaProductos: ProductoPedidoData[] = [];
  listaCategoria: CategoriaProductoData[] = [];
  productosEnCarrito: ProductoPedidoData[] = [];
  dataSourceDetallesPedidos = new MatTableDataSource<DetallePedidoCargaData>();
  dataSourceProductoPedido = new MatTableDataSource<ProductoPedidoData>();
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
  porcDescuentoGeneral!: number;
  nroRemito: string = '';
  subtotal!: number;
  impuestos!: number;
  subtotal2!: number;
  ivaInscriptoPorc!: number;
  ivaInscripto!: number;
  usuarioGraba: any = localStorage.getItem('NickName');
  total: number = 0;
  total_final: number = 0;
  descripcion!: string;

  constructor(
    private route: ActivatedRoute,
    private readonly pedidoService: PedidoService,
    private readonly detallePedidoService: DetallePedidoService,
    private readonly productoService: ProductoService,
    private readonly categoriaService: CategoriaProductoService,
    private readonly router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getidPedido();
    this.detallePedidoService.getDetallePedido(this.id).subscribe((response: any) => {
      console.log(response);
      if(response.length > 0) {
        this.idPedido = response[0].idPedido;
        this.cantidad = response[0].cantidad;
        this.detalle = response[0].detalle;
        this.porcDescuentoItem = response[0].porcDescuentoItem;
        this.precioUnitario = response[0].precioUnitario;
        this.importe = response[0].importe;
        this.isEntregadoItem = response[0].isEntregadoItem;
        this.creado = false;
      }
    });
  }

  getidPedido(){
    this.pedidoService.getPedidos().subscribe((response: any) => {
      const pedidos = response as PedidoData[];
      pedidos.forEach(element => {
        this.pedidosLista.push(element);
      });
    });
  }

  onEdit() {
    const pedido = new DetallePedidoEdit({
      idPedido: this.idPedido,
      cantidad: this.cantidad,
      detalle: this.detalle,
      porcDescuentoItem: this.porcDescuentoItem,
      precioUnitario: this.precioUnitario,
      importe: this.importe,
      isEntregadoItem: this.isEntregadoItem,
      usuarioModifica: this.usuarioModifica
    });
    this.detallePedidoService
      .editDetallePedido(pedido, this.id)
      .subscribe((response) => {
        return response;
      });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/detallePedido/listar');
    }, 1000);
  }

  goToListarDetallePedidoPage(){
    this.router.navigateByUrl(`home/detallePedido/listar`);
  }

  getProductos(): void {
    this.productoService.getProductos().subscribe((response: any) => {
      const productos = response as ProductoPedidoData[];
      productos.forEach((e) => {
        this.listaProductos.push({
          ...e
        });
      });
    });
  };

  getCategorias(): void {
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
      this.productosEnCarrito[ele].cantidad = this.productosEnCarrito[ele].cantidad + newProduct.cantidad;
      this.productosEnCarrito[ele].total = this.productosEnCarrito[ele].cantidad * newProduct.precioReferencia;
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
    if(this.productosEnCarrito.length !== 0){
      const pedido = new Pedido({
      isAnulado: 0,
      isEnviadoxMail: 0,
      isCobrado: 0,
      isFinalizado: 0,
      idCliente: 0,
      idVendedor: 0,
      idTipoReglaComercial: 0,
      idAbono: 0,
      idTipoCondicionesDeVenta: 0,
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
          console.log(response);
          this.router.navigateByUrl(`home/pedido/listar`);
        },
        (error) => {
            console.log(error);
        }
      );
      this.creado = true;
    }
  };

  editProduct(productId: ProductoPedidoData): void {
    console.log(this.editProductInput);
    console.log(productId);
    this.editProductInput = {
      ...productId
    }
  };
}
