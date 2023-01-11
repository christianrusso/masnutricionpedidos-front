import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PedidoData } from 'src/app/models/PedidoData';
import { PedidoService } from 'src/app/services/pedido.service';
import { ClienteData } from '../../../models/ClienteData';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor(
    private pedidoService: PedidoService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsPedidos: string[] = [
    'idPedido',
    'isAnulado',
    'isEnviadoxMail',
    'isCobrado',
    'isFinalizado',
    'idCliente',
    'idVendedor',
    'ivaInscripto',
    'total',
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

  goToPedidoCrearPage() {
    this.router.navigateByUrl('home/pedido/crear');
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

  goToEditPage(idPedido: number) {
    console.log(typeof(idPedido));
    this.router.navigateByUrl(`home/pedido/modificar/${idPedido}`);
  }

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
  }
}
