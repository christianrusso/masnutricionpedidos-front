import { AfterViewInit, Component, ViewChild, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CanalService } from 'src/app/services/canal.service';
import {CanalData} from '../../../models/CanalData';

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
  constructor(private canalServices: CanalService, private readonly router: Router, private dialog: MatDialog,) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsCanal: string[] = [
    'idTipoCanal',
    'Descripcion',
    'fechaGraba',
    'usuarioGraba',
    'fechaModifica',
    'usuarioModifica',
    'modificar',
    'eliminar'
  ];

  dataSource = new MatTableDataSource<CanalData>();
  matcher = new MyErrorStateMatcher();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getCanals();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getCanals() {
    this.canalServices.getCanales().subscribe((response: any) => {
      const canales = response as CanalData[];
      canales.forEach(element => {
        element.fechaGraba = element.fechaGraba.slice(0, -14);
        if (element.fechaModifica) {
          element.fechaModifica = element.fechaModifica.slice(0, -14);
        }

      });
      this.dataSource.data = canales;

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
    this.router.navigateByUrl(`/canal/modificar/${idTipoCanal}`);
  }

}
