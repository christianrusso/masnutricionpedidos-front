import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LocalidadData } from 'src/app/models/LocalidadData';
import { ProvinciaData } from 'src/app/models/ProvinciaData';
import { LocalidadService } from 'src/app/services/localidad.service';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { TipoCanalService } from 'src/app/services/tipo-canal.service';
import { CanalData } from '../../../models-tipo/TipoCanalData';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor(
    private localidadService: LocalidadService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsLocalidades: string[] = [
    'idProvincia',
    'idLocalidad',
    'Descripcion',
    'DescBreve',
    'CodigoPostal',
    'modificar',
    'eliminar',
  ];

  dataSource = new MatTableDataSource<LocalidadData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getLocalidades();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToLocalidadCrearPage() {
    this.router.navigateByUrl('home/localidad/crear');
  }

  getLocalidades() {
    this.localidadService.getLocalidades().subscribe((response: any) => {
      const localidades = response as LocalidadData[];
      this.dataSource.data = localidades;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToEditPage(idLocalidad: number) {
    this.router.navigateByUrl(`home/localidad/modificar/${idLocalidad}`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '300px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.localidadService.deleteLocalidad(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
