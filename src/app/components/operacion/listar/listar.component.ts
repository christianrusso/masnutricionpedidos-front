import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DetalleOperacionData } from 'src/app/models/DetalleOperacionData';
import { DetalleOperacionService } from 'src/app/services/detalle-operacion.service';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor(
    private operacionService: DetalleOperacionService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsOperaciones: string[] = [
    'idOperacion',
    'idPedido',
    'idDetallePedido',
    'cantidad',
    'detalle',
    'porcDescuentoItem',
    'precioUnitario',
    'importe',
    'modificar',
    'eliminar',
  ];

  dataSource = new MatTableDataSource<DetalleOperacionData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getOperaciones();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToOperacionCrearPage() {
    this.router.navigateByUrl('home/operacion/crear');
  }

  getOperaciones() {
    this.operacionService.getOperaciones().subscribe((response: any) => {
      const operaciones = response as DetalleOperacionData[];
      this.dataSource.data = operaciones;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToEditPage(idOperacion: number) {
    this.router.navigateByUrl(`home/operacion/modificar/${idOperacion}`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '250px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.operacionService.deleteOperacion(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
