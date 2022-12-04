import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GrupoAccesoPermisoData } from 'src/app/models/GrupoAccesoPermisoData';
import { GrupoAccesoPermisoService } from 'src/app/services/grupo-acceso-permiso.service';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor(
    private accesoPermisoService: GrupoAccesoPermisoService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsAccesosPermiso: string[] = [
    'idGrupoAcceso',
    'idTipoPermiso',
    'modificar',
    'eliminar',
  ];

  dataSource = new MatTableDataSource<GrupoAccesoPermisoData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAccesosPermiso();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToAccesoPermisoCrearPage() {
    this.router.navigateByUrl('home/accesoPermiso/crear');
  }

  getAccesosPermiso() {
    this.accesoPermisoService.getAccesoPermisos().subscribe((response: any) => {
      const accesos = response as GrupoAccesoPermisoData[];
      this.dataSource.data = accesos;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToEditPage(idAccesoPermiso: number) {
    this.router.navigateByUrl(`home/accesoPermiso/modificar/${idAccesoPermiso}`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '250px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.accesoPermisoService.deleteAccesoPermiso(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
