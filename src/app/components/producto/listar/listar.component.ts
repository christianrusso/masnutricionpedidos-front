import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductoData } from 'src/app/models/ProductoData';
import { ProductoService } from 'src/app/services/producto.service';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor(
    private productoServices: ProductoService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsProductos: string[] = [
    'id_producto',
    'descripcion',
    'idTipoProducto',
    'idTipoFamiliaProducto',
    'unidadesFijasPallet',
    'porcRelacionPallet',
    'precioReferencia',
    'modificar',
    'eliminar',
  ];

  dataSource = new MatTableDataSource<ProductoData>();

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

  getProductos() {
    this.productoServices.getProductos().subscribe((response: any) => {
      
      const productos = response as ProductoData[];
      console.log(productos);
      this.dataSource.data = productos;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToEditPage(idProducto: number) {
    this.router.navigateByUrl(`home/producto/modificar/${idProducto}`);
  }
  goToProductosCrearPage(){
    this.router.navigateByUrl(`home/producto/crear`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '250px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.productoServices.deleteProducto(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
