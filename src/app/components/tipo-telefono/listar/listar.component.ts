import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {  Router } from '@angular/router';
import { TelefonoData } from 'src/app/models-tipo/TipoTelefonoData';
import { TipoTelefonoService } from 'src/app/services/tipo-telefono.service';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor( private readonly tipotelefonoService: TipoTelefonoService, private readonly router: Router, private dialog: MatDialog,) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsTelefonos: string[] = [
    'idTipoTelefono',
    'descripcion',
    'modificar',
    'eliminar'
  ];

  dataSource = new MatTableDataSource<TelefonoData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getTelefonos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToTelefonoCrearPage(){
    this.router.navigateByUrl('home/tipo-telefonos/crear');
  }

  getTelefonos() {
    this.tipotelefonoService.getTelefonos().subscribe((response: any) => {
      console.log(response);

      const telefonos = response as TelefonoData[];
      telefonos.forEach(element => {
        element.fechaGraba = element.fechaGraba.slice(0, -14);
        if (element.fechaModifica) {
          element.fechaModifica = element.fechaModifica.slice(0, -14);
        }

      });
      this.dataSource.data = telefonos;

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
    this.router.navigateByUrl(`home/tipo-telefonos/modificar/${id}`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '300px',
      data: { delete: this.delete }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.tipotelefonoService.deleteTelefono(id).subscribe(response => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
