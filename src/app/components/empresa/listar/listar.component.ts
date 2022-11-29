import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
import { EmpresaData } from '../../../models/EmpresaData';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor(
    private empresaServices: EmpresaService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsEmpresas: string[] = [
    'idEmpresa',
    'NickName',
    'CUIT',
    'RazonSocial',
    'Direccion',
    'Email',
    'Icono',
    'isBorrado',
    'modificar',
    'eliminar',
  ];

  dataSource = new MatTableDataSource<EmpresaData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getEmpresas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToEmpresaCrearPage() {
    this.router.navigateByUrl('home/empresa/crear');
  }

  getEmpresas() {
    this.empresaServices.getEmpresas().subscribe((response: any) => {
      const empresas = response as EmpresaData[];
      this.dataSource.data = empresas;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToEditPage(idEmpresa: number) {
    this.router.navigateByUrl(`home/empresa/modificar/${idEmpresa}`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '250px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.empresaServices.deleteEmpresa(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
