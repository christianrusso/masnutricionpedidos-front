import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { EmpresaData } from 'src/app/models/EmpresaData';
import { GrupoAccesoData } from 'src/app/models/GrupoAccesoData';
import { Usuario } from 'src/app/models/usuario';
import { EmpresaService } from 'src/app/services/empresa.service';
import { GrupoAccesoService } from 'src/app/services/grupo-acceso.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly empresaService: EmpresaService,
    private usuarioService: UsuarioService,
    private grupoAccesoService: GrupoAccesoService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  idEmpresa: number = 0;
  idGrupoAcceso: number = 0;
  NickName	: string = '';
  Password: string = '';
  NombreApellido: string = '';
  CodInterno: string = '';
  Email: string = '';
  isAdmin: number = 0;
  usuarioGraba: any = localStorage.getItem('NickName');
  empresaLista: EmpresaData[] = [];
  accesosLista: GrupoAccesoData[] = [];

  ngOnInit(): void {
    this.getidEmpresa();
    this.getidGrupoAcceso();
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


  onSend() {
    const usuario = new Usuario({
      idEmpresa: this.idEmpresa,
      idGrupoAcceso: this.idGrupoAcceso,
      NickName: this.NickName,
      Password: this.Password,
      NombreApellido: this.NombreApellido,
      CodInterno: this.CodInterno,
      Email: this.Email,
      isAdmin: this.isAdmin,
      usuarioGraba: this.usuarioGraba
    });
    this.usuarioService.postUsuario(usuario).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/usuario/listar`);
    }, 1000);
  }

  goToListarUsuariosPage(){
    this.router.navigateByUrl(`home/usuario/listar`);
  }
}
