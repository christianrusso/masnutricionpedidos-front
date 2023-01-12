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
  dataSource = new MatTableDataSource<PedidoData>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  delete!: boolean;
  displayedColumnsDetallePedidos: string[] = [
    'idPedido',
    'fechaPedido',
    'representante',
    'num_interno',
    'descripcion',
    'observaciones',
    'total',
    'acction'
  ];

  constructor(
    private detallePedidoService: DetallePedidoService,
    private pedidoService: PedidoService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getPedidos();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getPedidos(): void {
    this.pedidoService.getPedidos().subscribe((response: any) => {
      const pedidos = response as PedidoData[];
      this.dataSource.data = pedidos;
    });
  };

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  };

  goToPrint(id: number): void {
    this.router.navigateByUrl(`home/detallePedido/detalles/${id}`);
  };

  goToPedidoCrearPage(): void {
    this.router.navigateByUrl('home/pedido/crear');
  };

  goToEditPage(idDetallePedido: number): void {
    console.log(idDetallePedido)
    this.router.navigateByUrl(`home/detallePedido/modificar/${idDetallePedido}`);
  };

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '300px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.pedidoService.deletePedido(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  };

  test(value: any): void {
    this.dataSource.filter = value.searchDate.trim().toLocaleLowerCase() ||
    value.searchAgent.trim().toLocaleLowerCase() || value.searchCondition.trim().toLocaleLowerCase()
    value.searchInternNumber.trim().toLocaleLowerCase();
  }
}
