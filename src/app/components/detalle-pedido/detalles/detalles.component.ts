import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DetallePedidoData } from 'src/app/models/DetallePedidoData';
import { PedidoData } from 'src/app/models/PedidoData';
import { DetallePedidoService } from 'src/app/services/detalle-pedido.service';
import { PedidoService } from 'src/app/services/pedido.service';
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
  fechaGraba!:string;

  displayedColumnsDetallePedidos: string[] = [
    'idPedido',
    'cantidad',
    'detalle',
    'porcDescuentoItem',
    'precioUnitario',
    'importe',
    'isEntregadoItem',
  ];

  dataSource = new MatTableDataSource<DetallePedidoData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPedido();
    this.detallePedidoService
      .getDetallePedido(this.id)
      .subscribe((response: any) => {
        const detalles = response as DetallePedidoData[];
        this.dataSource.data = detalles;
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
}