import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DetallePedidoData } from 'src/app/models/DetallePedidoData';
import { PedidoData } from 'src/app/models/PedidoData';
import { ProductosPorPedidoData } from 'src/app/models/ProductosPorPedido';
import { DetallePedidoService } from 'src/app/services/detalle-pedido.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductosPorPedidoService } from 'src/app/services/productosPorPedido.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent {
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private readonly pedidoService: PedidoService,
    private readonly detallePedidoService: DetallePedidoService,
    private readonly productosPorPedido: ProductosPorPedidoService,
    private readonly router: Router
  ) {
    this.dataSource = new MatTableDataSource();
  }
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

  num_interno!: number;
  representante!: string;
  cod!: number;
  cuit!: number;
  domicilio!: string;
  telefono!: number;
  transporte!: string;
  observaciones!: string;
  fechaGraba!: string;
  total!: number;

  displayedColumnsDetallePedidos: string[] = [
    'idPedido',
    'idProducto',
    'cantidad',
    'codigo',
    'descripcion',
    'precio',
    'unidades_bulto',
    'pallets',
    'condicion',
    'total',
  ];

  dataSource = new MatTableDataSource<ProductosPorPedidoData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPedido();
    this.productosPorPedido.getProductos(this.id).subscribe((response: any) => {
      const productos = response as ProductosPorPedidoData[];
      console.log(productos);

      this.dataSource.data = productos;
    });
  }

  getPedido() {
    this.pedidoService.getPedido(this.id).subscribe((response: any) => {
      this.num_interno = response[0].num_interno;
      this.representante = response[0].representante;
      this.cod = response[0].cod;
      this.cuit = response[0].cuit;
      this.domicilio = response[0].domicilio;
      this.telefono = response[0].telefono;
      this.transporte = response[0].transporte;
      this.observaciones = response[0].observaciones;
      this.fechaGraba = response[0].fechaGraba;
      this.total = response[0].total;
    });
  }

  goToListarDetallePedidoPage() {
    this.router.navigateByUrl(`home/detallePedido/listar`);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  goToEditarDetallePedidoPage() {
    this.router.navigateByUrl(`home/detallePedido/modificar/${this.id}`);
  }
}
