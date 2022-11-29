import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Canal } from '../../../models-tipo/tipo-canal';
import { Router } from '@angular/router';
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
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { TipoReglaComercialService } from 'src/app/services/tipo-regla-comercial.service';
import { ReglaData } from 'src/app/models-tipo/TipoReglaData';
import { TipoCondicionesVentaService } from 'src/app/services/tipo-condiciones-venta.service';
import { CondicionData } from 'src/app/models-tipo/TipoCondicionData';
import { Vendedor } from 'src/app/models/vendedor';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private empresaServices: EmpresaService,
    private readonly vendedorService: VendedorService,
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
  Password: string = '';
  NombreApellido: string = '';
  CodInterno: string = '';
  Email: string = '';
  isAdmin: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');

  empresasLista: EmpresaData[] = [];
  vendedoresLista: VendedorData[] = [];


  ngOnInit(): void {
    this.getIds();
  }

  getIds(){
    this.getidEmpresa();
  }

  getidEmpresa(){
    this.empresaServices.getEmpresas().subscribe((response: any) => {
      const empresas = response as EmpresaData[];
      empresas.forEach(element => {
        this.empresasLista.push(element);
      });
    });
  }

  onSend() {
    console.log(this.idEmpresa);

    const vendedor = new Vendedor({
      idEmpresa : this.idEmpresa,
      NickName : this.NickName,
      Password : this.Password,
      NombreApellido : this.NombreApellido,
      CodInterno : this.CodInterno,
      Email : this.Email,
      isAdmin : this.isAdmin,
      usuarioGraba : this.usuarioGraba
    });
    this.vendedorService.postVendedor(vendedor).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/vendedor/listar`);
    }, 1000);
  }

  goToListarVendedorPage(){
    this.router.navigateByUrl(`home/vendedor/listar`);
  }
}
