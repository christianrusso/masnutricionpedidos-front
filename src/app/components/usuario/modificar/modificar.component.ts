import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailEdit } from 'src/app/models/email-edit';
import { EmpresaData } from 'src/app/models/EmpresaData';
import { GrupoAccesoData } from 'src/app/models/GrupoAccesoData';
import { EmpresaService } from 'src/app/services/empresa.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GrupoAccesoService } from 'src/app/services/grupo-acceso.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { UsuarioEdit } from 'src/app/models/usuario-edit';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private readonly empresaService: EmpresaService,
    private usuarioService: UsuarioService,
    private grupoAccesoService: GrupoAccesoService,
    private readonly router: Router
  ) {}
  creado: boolean = false;

  idEmpresa: number = 0;
  idGrupoAcceso: number = 0;
  NickName	: string = '';
  Password: string = '';
  NombreApellido: string = '';
  CodInterno: string = '';
  Email: string = '';
  isAdmin: number = 0;
  isInactivo: number = 0;
  empresaLista: EmpresaData[] = [];
  accesosLista: GrupoAccesoData[] = [];

  usuarioModifica: any = localStorage.getItem('NickName');

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getidEmpresa();
    this.getidGrupoAcceso();
    this.usuarioService.getUsuario(this.id).subscribe((response: any) => {
      this.idEmpresa = response[0].idEmpresa,
      this.idGrupoAcceso = response[0].idGrupoAcceso,
      this.NickName = response[0].NickName,
      //this.Password = response[0].Password,
      this.NombreApellido = response[0].NombreApellido,
      this.CodInterno = response[0].CodInterno,
      this.Email = response[0].Email,
      this.isAdmin = response[0].isAdmin,
      this.creado = false;
    });
  }

  getidEmpresa(){
    this.empresaService.getEmpresas().subscribe((response: any) => {
      const empresas = response as EmpresaData[];
      empresas.forEach(element => {
        this.empresaLista.push(element);
      });
    });
  }

  getidGrupoAcceso(){
    this.grupoAccesoService.getAccesos().subscribe((response: any) => {
      const accesos = response as GrupoAccesoData[];
      accesos.forEach(element => {
        this.accesosLista.push(element);
      });
    });
  }

  marcar(ob: MatCheckboxChange) {
    if (ob.checked) {
      this.isAdmin = 1;
    } else {
      this.isAdmin = 0;
    }
  }

  marcarInactivo(ob: MatCheckboxChange) {
    if (ob.checked) {
      this.isInactivo = 1;
    } else {
      this.isInactivo = 0;
    }
  }


  onEdit() {
    const usuario = new UsuarioEdit({
      idEmpresa: this.idEmpresa,
      idGrupoAcceso: this.idGrupoAcceso,
      NickName: this.NickName,
      Password: this.Password,
      NombreApellido: this.NombreApellido,
      CodInterno: this.CodInterno,
      Email: this.Email,
      isAdmin: this.isAdmin,
      isInactivo: this.isInactivo,
      usuarioModifica: this.usuarioModifica
    });
    this.usuarioService
      .editUsuario(usuario, this.id)
      .subscribe((response) => {
        return response;
      });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/usuario/listar');
    }, 1000);
  }

  goToListarUsuariosPage(){
    this.router.navigateByUrl(`home/usuario/listar`);
  }
}
