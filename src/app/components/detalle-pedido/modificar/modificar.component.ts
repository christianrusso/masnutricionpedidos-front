import { ChangeDetectorRef, Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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
  editProduct: ProductoPedidoData;
  orderForm: FormGroup = this.fb.group({
    fechaGraba: [this.today, Validators.required],
    num_interno: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    representante: ['', [Validators.required, Validators.maxLength(100)]],
    codigo: ['', [Validators.required, Validators.maxLength(100)]],
    cuit: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    domicilio: ['', [Validators.required, Validators.maxLength(100)]],
    telefono: ['' ,[Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    transporte: ['' ,[Validators.required, Validators.maxLength(100)]],
    observaciones: ['', Validators.maxLength(100)]
  });
  detailOrderForm: FormGroup = this.fb.group({
    category: ['', Validators.required],
    product: ['', Validators.required],
    amount: [ , [ Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
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
  usuarioGraba: any = localStorage.getItem('NickName');
  @ViewChild('scroll') scroll: ElementRef;
  @ViewChild('productTable') productTable: ElementRef;
  usuarioModifica: any = localStorage.getItem('NickName');
  pedido: any;

  constructor(
    private pedidoService: PedidoService,
    private productosPorPedido: ProductosPorPedidoService,
    private categoriaService: CategoriaProductoService,
    private productoService: ProductoService,
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<Date>,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef) {
      this.id = this.route.snapshot.params['id'];
  };

  ngOnInit(): void {
    this.dateAdapter.setLocale('es');
    this.getPedido();
    this.getProductOrder();
    this.getProductos();
    this.getCategorias();
  };

  ngAfterViewInit(): void {
    this.firstInput.nativeElement.focus();
    this.cd.detectChanges();
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
    this.pedidoService.getPedido(this.id).subscribe(
      (response: any) => {
        this.orderForm.setValue({
          fechaGraba: response[0].fechaGraba,
          num_interno: response[0].num_interno,
          representante: response[0].representante,
          codigo: response[0].codigo,
          cuit: response[0].cuit,
          domicilio: response[0].domicilio,
          telefono: response[0].telefono,
          transporte: response[0].transporte,
          observaciones: response[0].observaciones
        });
        this.pedido = response[0];
      }, error => {
        console.log(error);
      });
  };

  getProductOrder(): void {
    this.productosPorPedido.getProductos(this.id).subscribe(
      response => {
        const productos = response as ProductosPorPedidoData[];
        this.dataSourceProductoPedido.data = productos;
        this.productosEnCarrito = response as ProductoPedidoData[]
      }, error => {
        console.log(error);
      }
    )
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

  addNewProduct(): void {
    const ele = this.productosEnCarrito.findIndex((e: any) => e.idProducto === this.detailOrderForm.value.product);
    const productInfo: any = this.listaProductos.find(e => e.id_producto === this.detailOrderForm.value.product);
    if(ele === -1){
      const product: any = {
        idProducto: this.detailOrderForm.value.product,
        descripcion: productInfo.descripcion,
        precio: productInfo.precioReferencia,
        precioReferencia: productInfo.precioReferencia,
        cantidad: Number.parseInt(this.detailOrderForm.value.amount),
        porcRelacionPallet: productInfo.porcRelacionPallet,
        unidadesFijasPallet: productInfo.unidadesFijasPallet,
        unidades_bulto: productInfo.porcRelacionPallet,
        pallets: productInfo.unidadesFijasPallet,
        condicion: this.detailOrderForm.value.condition,
        codigo: productInfo.codigo,
        total: Number.parseInt(this.detailOrderForm.value.amount) * productInfo.precioReferencia,
        idCategoria: this.detailOrderForm.value.category,
        fechaGraba: productInfo.fechaGraba,
        fechaModifica: productInfo.fechaModifica,
        idTipoFamiliaProducto: productInfo.idTipoFamiliaProducto,
        idTipoProducto: productInfo.idTipoProducto,
        usuarioGraba: productInfo.usuarioGraba,
        usuarioModifica: this.usuarioModifica
    };
      this.productosEnCarrito.push(product);
    } else {
      this.productosEnCarrito[ele].cantidad = Number.parseInt(this.detailOrderForm.value.amount);
      this.productosEnCarrito[ele].total = this.productosEnCarrito[ele].cantidad * productInfo.precioReferencia;
      this.productosEnCarrito[ele].condicion = this.detailOrderForm.value.condition;
      this.productosEnCarrito[ele].categoria = this.detailOrderForm.value.category;
    }
    this.dataSourceProductoPedido.data = this.productosEnCarrito;
    this.detailOrderForm.reset();
    Object.keys(this.detailOrderForm.controls).forEach(key =>{
      this.detailOrderForm.controls[key].setErrors(null);
    });
  };

  cancelOrder(): void {
    this.router.navigateByUrl(`home/pedido/listar`);
  };

  eliminarElemento(producto: ProductoPedidoData) {
    const indexProduct = this.productosEnCarrito.findIndex(product => product.idProducto === producto.idProducto);
    if(indexProduct !== -1){
      this.productosPorPedido.deleteProductOfOrder(this.id, Number(producto.idProducto)).subscribe(
        response => {
          this.productosEnCarrito.splice(indexProduct, 1);
          this.dataSourceProductoPedido.data = this.productosEnCarrito;
        }, error => {
          console.log(error);
        });
    }
  };

  editProducto(product: any): void {
    this.detailOrderForm.setValue({
      category: product.idCategoria,
      product: product.idProducto,
      amount: product.cantidad,
      condition: product.condicion
    });
    this.productTable.nativeElement.scrollIntoView({behavior: 'smooth'});
  };

  saveOrder(): void {
    const pedido = {
      ...this.orderForm.value,
      isAnulado: this.pedido.isAnulado,
      isEnviadoxMail: this.pedido.isEnviadoxMail,
      isCobrado: this.pedido.isCobrado,
      isFinalizado: this.pedido.isFinalizado,
      idCliente: this.pedido.idCliente,
      idVendedor: this.pedido.idVendedor,
      idTipoReglaComercial: this.pedido.idTipoReglaComercial,
      idAbono: this.pedido.idAbono,
      idTipoCondicionesDeVenta: this.pedido.idTipoCondicionesDeVenta,
      fechaPedido: this.orderForm.controls['fechaGraba'].value,
      porcDescuentoGeneral: this.pedido.porcDescuentoGeneral,
      nroRemito: this.pedido.nroRemito,
      subtotal: this.pedido.subtotal,
      impuestos: this.pedido.impuestos,
      subtotal2: this.pedido.subtotal2,
      ivaInscriptoPorc: this.pedido.ivaInscriptoPorc,
      ivaInscripto: this.pedido.ivaInscripto,
      total: this.pedido.total,
      usuarioModifica: this.pedido.usuarioModifica,
    };
    this.pedidoService.editPedidoTest(pedido, this.id,this.productosEnCarrito).subscribe(
      (response) => {
        this.router.navigateByUrl(`home/detallePedido/listar`);
      }, (error) => {
        console.log(error);
    });
  };

  get fechaGraba() { return this.orderForm.get('fechaGraba'); };
  get num_interno() { return this.orderForm.get('num_interno'); };
  get representante() { return this.orderForm.get('representante'); };
  get codigo() { return this.orderForm.get('codigo'); };
  get cuit() { return this.orderForm.get('cuit'); };
  get domicilio() { return this.orderForm.get('domicilio'); };
  get telefono() { return this.orderForm.get('telefono'); };
  get transporte() { return this.orderForm.get('transporte'); };
  get observaciones() { return this.orderForm.get('observaciones'); };
  get category() { return this.detailOrderForm.get('category'); };
  get product() { return this.detailOrderForm.get('product'); };
  get amount() { return this.detailOrderForm.get('amount'); };
  get condition() { return this.detailOrderForm.get('condition'); };
}
