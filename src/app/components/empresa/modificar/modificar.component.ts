import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Canal } from '../../../models-tipo/tipo-canal';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteData } from 'src/app/models/ClienteData';
import { TipoClienteData } from 'src/app/models-tipo/TipoClienteData';
import { TipoClienteService } from 'src/app/services/tipo-cliente.service';
import { UntypedFormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { TipoCanalService } from 'src/app/services/tipo-canal.service';
import { CanalData } from 'src/app/models-tipo/TipoCanalData';
import { EmpresaService } from 'src/app/services/empresa.service';
import { EmpresaData } from 'src/app/models/EmpresaData';
import { TipoIvaService } from 'src/app/services/tipo-iva.service';
import { IvaData } from 'src/app/models-tipo/TipoIvaData';
import { VendedorService } from 'src/app/services/vendedor.service';
import { VendedorData } from 'src/app/models/VendedorData';
import { LocalidadService } from 'src/app/services/localidad.service';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { LocalidadData } from 'src/app/models/LocalidadData';
import { ProvinciaData } from 'src/app/models/ProvinciaData';
import { ClienteEdit } from 'src/app/models/cliente-edit';
import { EmpresaEdit } from 'src/app/models/empresa-edit';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  creado: boolean;
  constructor(
    private empresaServices: EmpresaService,
    private route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  myControl = new UntypedFormControl();
  options: TipoClienteData[] = [];
  filteredOptions?: Observable<TipoClienteData[]>;
  selected = 'option2';



  idEmpresa : number = 0;
  NickName: string = '';
  CUIT: string = '';
  RazonSocial: string = '';
  Direccion: string = '';
  Email: string = '';
  Icono: string = '';
  usuarioModifica: any = localStorage.getItem('NickName');

  tipoClienteLista: TipoClienteData[] = [];
  tipoCanalLista: CanalData[] = [];
  empresasLista: EmpresaData[] = [];
  ivasLista: IvaData[] = [];
  vendedoresLista: VendedorData[] = [];
  localidadesLista: LocalidadData[] = [];
  provinciasLista: ProvinciaData[] = [];
  id: number = 0;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empresaServices.getEmpresa(this.id).subscribe((response: any) => {
      this.NickName = response[0].NickName,
      this.CUIT = response[0].CUIT,
      this.RazonSocial = response[0].RazonSocial,
      this.Direccion = response[0].Direccion,
      this.Email = response[0].Email,
      this.Icono = response[0].Icono,
      this.creado = false;
    });
  }



  onEdit() {
    const empresa = new EmpresaEdit({
      NickName : this.NickName,
      CUIT : this.CUIT,
      RazonSocial : this.RazonSocial,
      Direccion : this.Direccion,
      Email : this.Email,
      Icono : this.Icono,
      usuarioModifica : this.usuarioModifica
    });
    this.empresaServices.editEmpresa(empresa, this.id).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/empresa/listar`);
    }, 1000);
  }

  goToListarEmpresasPage(){
    this.router.navigateByUrl(`home/empresa/listar`);
  }
}
