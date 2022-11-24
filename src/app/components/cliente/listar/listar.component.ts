import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
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
    private clienteServices: ClienteService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsClientes: string[] = [
    'idTipoCliente',
    'idTipoCanal',
    'razonSocial',
    'nombreFantasia',
    'idTipoIVA',
    'CUIT',
    'fechaAlta',
    'score',
    'aniosActividad',
    'montoCredito',
    'idVendedorAsignado',
    'calle',
    'calle1',
    'calle2',
    'nroPuerta',
    'piso',
    'dpto',
    'idLocalidad',
    'idProvincia',
    'CP',
    'horarioAtencion',
    'horarioCobranza',
    'isBorrado',
    'web',
    'modificar',
    'eliminar',
  ];

  dataSource = new MatTableDataSource<CanalData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getClientes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getClientes() {
    this.clienteServices.getClientes().subscribe((response: any) => {
      const clientes = response as CanalData[];
      clientes.forEach((element) => {
        element.fechaGraba = element.fechaGraba.slice(0, -14);
        if (element.fechaModifica) {
          element.fechaModifica = element.fechaModifica.slice(0, -14);
        }
      });
      this.dataSource.data = clientes;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToEditPage(idTipoCanal: number) {
    this.router.navigateByUrl(`home/cliente/modificar/${idTipoCanal}`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '250px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.clienteServices.deleteCliente(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
