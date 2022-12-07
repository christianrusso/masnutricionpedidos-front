import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TipoProductoData } from 'src/app/models-tipo/TipoProductoData';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor(
    private readonly tipoproductoService: TipoProductoService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsProducto: string[] = [
    'idTipoProducto',
    'descripcion',
    'DescBreve',
    'modificar',
    'eliminar',
  ];

  dataSource = new MatTableDataSource<TipoProductoData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getProductos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToProductosCrearPage(){
    this.router.navigateByUrl('home/tipo-productos/crear');
  }

  getProductos() {
    this.tipoproductoService.getProductos().subscribe((response: any) => {
      console.log(response);

      const ivas = response as TipoProductoData[];
      ivas.forEach((element) => {
        element.fechaGraba = element.fechaGraba.slice(0, -14);
        if (element.fechaModifica) {
          element.fechaModifica = element.fechaModifica.slice(0, -14);
        }
      });
      this.dataSource.data = ivas;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToEditPage(id: number) {
    this.router.navigateByUrl(`home/tipo-productos/modificar/${id}`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '300px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.tipoproductoService.deleteProducto(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
