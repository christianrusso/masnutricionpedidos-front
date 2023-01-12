import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ProductosPorPedidoData } from 'src/app/models/ProductosPorPedido';
import { PedidoData } from 'src/app/models/PedidoData';
import { ProductosPorPedidoService } from 'src/app/services/productosPorPedido.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { CategoriaProductoData } from 'src/app/models/categoriaProductoData';
import { ProductoPedidoData } from 'src/app/models/ProductosPedidoData';
import { CategoriaProductoService } from 'src/app/services/categoria-producto.service';
import { ProductoService } from 'src/app/services/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { DetallePedidoCargaData } from 'src/app/models/DetallePedidoCarga';
import { Observable } from 'rxjs';
import { TipoClienteData } from 'src/app/models-tipo/TipoClienteData';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Pedido } from 'src/app/models/pedido';
import * as moment from 'moment';
import { PedidoEdit } from 'src/app/models/pedido-edit';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {

  @ViewChild('firstInput') firstInput: ElementRef;
  @ViewChild('categorySelect') categorySelect: ElementRef;
  id: number = -1;
  today: Date = new Date();
  categories: CategoriaProductoData[] = [];
  products: ProductoPedidoData[] = [];
  editProduct: ProductoPedidoData;
  orderForm: FormGroup = this.fb.group({
    date: [this.today, Validators.required],
    internNumber: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    agent: ['', [Validators.required, Validators.maxLength(100)]],
    cod: ['', [Validators.required, Validators.maxLength(100)]],
    cuit: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    address: ['', [Validators.required, Validators.maxLength(100)]],
    phone: ['' ,[Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    transport: ['' ,[Validators.required, Validators.maxLength(100)]],
    observation: ['', Validators.maxLength(100)]
  });
  detailOrderForm: FormGroup = this.fb.group({
    category: ['', Validators.required],
    product: ['', Validators.required],
    amount: [ , [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    condition: ['', [Validators.required, Validators.maxLength(100)]]
  });
  dataSourceCarrito: MatTableDataSource<ProductoPedidoData> = new MatTableDataSource();
  dataSourceDetallesPedidos = new MatTableDataSource<DetallePedidoCargaData>();
  displayedColumnsDetallesPedidos: string[] = [
    'categoria',
    'producto',
    'cantidad',
    'condicion',
    'agregar',
  ];
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
  dataSourceProductoPedido = new MatTableDataSource<any>();
  productosEnCarrito: ProductoPedidoData[] = [];
  listaProductos: ProductoPedidoData[] = [];
  listaCategoria: CategoriaProductoData[] = [];
  categoria!: string;
  producto!: string;
  cantidad!: number;
  condicion!: string;
  productos: DetallePedidoCargaData[] = [];
  idProducto!: number;
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
  usuarioModifica: any = localStorage.getItem('NickName');

  constructor(
    private pedidoService: PedidoService,
    private productosPorPedido: ProductosPorPedidoService,
    private categoriaService: CategoriaProductoService,
    private productoService: ProductoService,
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<Date>,
    private router: Router,
    private route: ActivatedRoute,) {
      this.id = this.route.snapshot.params['id'];
      this.getPedido();
      this.getProductos();
      this.getCategorias();
  }

  ngOnInit(): void {
    this.dateAdapter.setLocale('es');
    this.productosPorPedido.getProductos(this.id).subscribe((response: any) => {
      const productos = response as ProductosPorPedidoData[];
      this.dataSourceProductoPedido.data = productos;
    });
  };

  ngAfterViewInit(): void {
    this.firstInput.nativeElement.focus();
  };

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editProduct'].currentValue !== changes['editProduct'].previousValue){
      this.detailOrderForm.setValue({
        category: changes['editProduct'].currentValue.categoria,
        product: changes['editProduct'].currentValue.id_producto,
        amount: changes['editProduct'].currentValue.cantidad,
        condition: changes['editProduct'].currentValue.condicion
      });
    }
  }

  getPedido(): void {
    this.pedidoService.getPedido(this.id).subscribe((response: any) => {
      this.orderForm.setValue({
        date: response[0].fechaGraba,
        internNumber: response[0].num_interno,
        agent: response[0].representante,
        cod: response[0].cod,
        cuit: response[0].cuit,
        address: response[0].domicilio,
        phone:  response[0].telefono,
        transport:  response[0].transporte,
        observation:  response[0].observaciones
      });
    });
  };

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

  addNewProduct(): void {
    const productInfo: any = this.products.find(e => e.id_producto === this.detailOrderForm.value.product);
    const product: ProductoPedidoData = {
      id_producto: this.detailOrderForm.value.product,
      descripcion: productInfo.descripcion,
      precioReferencia: productInfo.precioReferencia,
      cantidad:  Number.parseInt(this.detailOrderForm.value.amount),
      porcRelacionPallet: productInfo.porcRelacionPallet,
      unidadesFijasPallet: productInfo.unidadesFijasPallet,
      condicion: this.detailOrderForm.value.condition,
      codigo: productInfo.codigo,
      total: this.detailOrderForm.value.total * productInfo.precioReferencia,
      categoria: this.detailOrderForm.value.category
    };
    this.detailOrderForm.reset();
    Object.keys(this.detailOrderForm.controls).forEach(key =>{
      this.detailOrderForm.controls[key].setErrors(null);
    });
  };

  cancelOrder(): void {
    this.router.navigateByUrl(`home/pedido/listar`);
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

  onSend(orderInfo: any): void {
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
    }
  };

  editProductt(productId: ProductoPedidoData): void {
    this.editProductInput = {
      ...productId
    }
    this.productTable.nativeElement.scrollIntoView({behavior: 'smooth'});
  };

  saveOrder(): void {
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
      usuarioModifica: this.usuarioModifica,
    });
    this.pedidoService
      .editPedido(pedido, this.id).subscribe(
        (response) => {
          console.log(response);
          this.router.navigateByUrl(`home/detallePedido/listar`);
        }, (error) => {
          console.log(error);
        });
  };

  get date() { return this.orderForm.get('date'); }
  get internNumber() { return this.orderForm.get('internNumber'); }
  get agent() { return this.orderForm.get('agent'); }
  get cod() { return this.orderForm.get('cod'); }
  get cuit() { return this.orderForm.get('cuit'); }
  get address() { return this.orderForm.get('address'); }
  get phone() { return this.orderForm.get('phone'); }
  get transport() { return this.orderForm.get('transport'); }
  get observation() { return this.orderForm.get('observation'); }
  get category() { return this.detailOrderForm.get('category'); }
  get product() { return this.detailOrderForm.get('product'); }
  get amount() { return this.detailOrderForm.get('amount'); }
  get condition() { return this.detailOrderForm.get('condition'); }
}
