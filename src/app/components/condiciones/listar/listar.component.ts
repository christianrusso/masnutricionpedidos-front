import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { UntypedFormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {  Router } from '@angular/router';
import { CondicionData } from 'src/app/models/CondicionData';
import { CondicionesVentaService } from 'src/app/services/condiciones-venta.service';
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
  constructor( private readonly condicionesService: CondicionesVentaService, private readonly router: Router, private dialog: MatDialog,) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsCondiciones: string[] = [
    'idTipoCondicionesDeVenta',
    'descripcion',
    'fechaGraba',
    'usuarioGraba',
    'fechaModifica',
    'usuarioModifica',
    'modificar',
    'eliminar'
  ];

  dataSource = new MatTableDataSource<CondicionData>();
  matcher = new MyErrorStateMatcher();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getCondiciones();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getCondiciones() {
    this.condicionesService.getCondiciones().subscribe((response: any) => {
      console.log(response);

      const condiciones = response as CondicionData[];
      condiciones.forEach(element => {
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
    this.router.navigateByUrl(`/condiciones/modificar/${id}`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '250px',
      data: { delete: this.delete }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.condicionesService.deleteCondicion(id).subscribe(response => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
