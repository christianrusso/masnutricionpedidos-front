import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VendedorData } from 'src/app/models/VendedorData';
import { VendedorService } from 'src/app/services/vendedor.service';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor(
    private vendedorService: VendedorService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsVendedores: string[] = [
    'idEmpresa',
    'idVendedor',
    'NickName',
    'Password',
    'NombreApellido',
    'CodInterno',
    'Email',
    'isAdmin',
    'isInactivo',
    'isBorrado',
    'modificar',
    'eliminar',
  ];

  dataSource = new MatTableDataSource<VendedorData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getVendedores();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToVendedorCrearPage() {
    this.router.navigateByUrl('home/vendedor/crear');
  }

  getVendedores() {
    this.vendedorService.getVendedores().subscribe((response: any) => {
      const vendedores = response as VendedorData[];
      this.dataSource.data = vendedores;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToEditPage(idVendedor: number) {
    this.router.navigateByUrl(`home/vendedor/modificar/${idVendedor}`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '250px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.vendedorService.deleteVendedor(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
