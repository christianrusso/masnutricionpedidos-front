import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FamiliaData } from 'src/app/models-tipo/TipoFamiliaData';
import { TipoFamiliaProductoService } from 'src/app/services/tipo-familia-producto.service';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor(
    private readonly tipofamiliaService: TipoFamiliaProductoService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsFamilia: string[] = [
    'idTipoFamiliaProducto',
    'descripcion',
    'DescBreve',
    'unidadesFijasPallet',
    'porcRelacionPallet',
    'modificar',
    'eliminar',
  ];

  dataSource = new MatTableDataSource<FamiliaData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getFamilias();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToFamiliaCrearPage(){
    this.router.navigateByUrl('home/tipo-familia-producto/crear');
  }

  getFamilias() {
    this.tipofamiliaService.getFamilias().subscribe((response: any) => {
      console.log(response);

      const condiciones = response as FamiliaData[];
      condiciones.forEach((element) => {
        element.fechaGraba = element.fechaGraba.slice(0, -14);
        if (element.fechaModifica) {
          element.fechaModifica = element.fechaModifica.slice(0, -14);
        }
      });
      this.dataSource.data = condiciones;
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
    this.router.navigateByUrl(`home/tipo-familia-producto/modificar/${id}`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '250px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.tipofamiliaService.deleteFamilia(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
