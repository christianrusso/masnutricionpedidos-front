import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmailData } from 'src/app/models/EmailData';
import { UsuarioData } from 'src/app/models/usuarioData';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit, AfterViewInit {
  delete!: boolean;
  constructor(
    private usuarioService: UsuarioService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  displayedColumnsUsuarios: string[] = [
    //'idUsuario',
    //'idEmpresa',
    //'idGrupoAcceso',
    'NickName',
    //'Password',
    'NombreApellido',
    'CodInterno',
    'Email',
    'isAdmin',
    'isInactivo',
    //'isBorrado',
    'rol',
    'modificar',
    'eliminar',
  ];

  dataSource = new MatTableDataSource<UsuarioData>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getUsuarios();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToUsuarioCrearPage() {
    this.router.navigateByUrl('home/usuario/crear');
  }

  goToRolesPage(idUsuario: number) {
    this.router.navigateByUrl(`home/usuario/rol/${idUsuario}`);
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe((response: any) => {
      const usuarios = response as UsuarioData[];
      this.dataSource.data = usuarios;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToEditPage(idUsuario: number) {
    this.router.navigateByUrl(`home/usuario/modificar/${idUsuario}`);
  }

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '300px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.usuarioService.deleteUsuario(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  }
}
