import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DetallePedidoData } from 'src/app/models/DetallePedidoData';
import { PedidoData } from 'src/app/models/PedidoData';
import { DetallePedidoService } from 'src/app/services/detalle-pedido.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor(
    private detallePedidoService: DetallePedidoService,
    private pedidoService: PedidoService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsDetallePedidos: string[] = [
    'idPedido',
    'idDetallePedido',
    'cantidad',
    'detalle',
    'porcDescuentoItem',
    'precioUnitario',
    'importe',
    'isEntregadoItem',
    'modificar',
    'eliminar',
  ];

  dataSource = new MatTableDataSource<PedidoData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getPedidos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  goToPrint(id: number){
    this.router.navigateByUrl(`home/detallePedido/detalles/${id}`);
  }

  goToDetallePedidoCrearPage() {
    this.router.navigateByUrl('home/operacion/crear');
  }

  getPedidos() {
    this.pedidoService.getPedidos().subscribe((response: any) => {
      const pedidos = response as PedidoData[];
      this.dataSource.data = pedidos;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToEditPage(idDetallePedido: number) {
    this.router.navigateByUrl(`home/detallePedido/modificar/${idDetallePedido}`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '300px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.detallePedidoService.deleteDetallePedido(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
