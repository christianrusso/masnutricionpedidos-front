import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../../models/empresa';
import { Router } from '@angular/router';
import { EmpresaData } from 'src/app/models/EmpresaData';
import { UntypedFormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private empresaServices: EmpresaService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  myControl = new UntypedFormControl();
  options: EmpresaData[] = [];
  filteredOptions?: Observable<EmpresaData[]>;
  selected = 'option2';



  idEmpresa : number = 0;
  NickName: string = '';
  CUIT: string = '';
  RazonSocial: string = '';
  Direccion: string = '';
  Email: string = '';
  Icono: string = '';
  isBorrado: number = 0;
  usuarioGraba: any = localStorage.getItem('NickName');

  empresasLista: EmpresaData[] = [];

  ngOnInit(): void {

  }


  onSend() {
    const empresa = new Empresa({
      NickName: this.NickName,
      CUIT: this.CUIT,
      RazonSocial: this.RazonSocial,
      Direccion: this.Direccion,
      Email: this.Email,
      Icono: this.Icono,
      usuarioGraba : this.usuarioGraba
    });
    this.empresaServices.postEmpresa(empresa).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/empresa/listar`);
    }, 1000);
  }

  goToListarClientesPage(){
    this.router.navigateByUrl(`home/cliente/listar`);
  }
}
