import { AfterViewInit, Component, ViewChild, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoClienteService } from 'src/app/services/tipo-cliente.service';
import {ClienteData} from '../../../models/ClienteData';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor( private readonly tipoclienteService: TipoClienteService, private readonly router: Router, private dialog: MatDialog,) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsClientes: string[] = [
    'idTipoCliente',
    'Descripcion',
    'modificar',
    'eliminar'
  ];

  dataSource = new MatTableDataSource<ClienteData>();
  matcher = new MyErrorStateMatcher();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getClients();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getClients() {
    this.tipoclienteService.getClientes().subscribe((response: any) => {
      console.log(response);

      const clientes = response as ClienteData[];
      clientes.forEach(element => {
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

  goToEditPage(idTipoCliente: number) {
    this.router.navigateByUrl(`/tipo-cliente/modificar/${idTipoCliente}`);
  }


  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '250px',
      data: { delete: this.delete }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.tipoclienteService.deleteCliente(id).subscribe(response => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
