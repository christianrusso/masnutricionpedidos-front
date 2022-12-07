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
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';
import { ProductoData } from 'src/app/models/ProductoData';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';
import { TipoFamiliaProductoService } from 'src/app/services/tipo-familia-producto.service';
import { FamiliaData } from 'src/app/models-tipo/TipoFamiliaData';
import { TipoProductoData } from 'src/app/models-tipo/TipoProductoData'
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private productosService: ProductoService,
    private tipoProductoService : TipoProductoService,
    private tipoFamiliaProductoService : TipoFamiliaProductoService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  myControl = new UntypedFormControl();
  options: TipoClienteData[] = [];
  filteredOptions?: Observable<TipoClienteData[]>;
  selected = 'option2';

  descripcion: string = '';
  idTipoProducto: number = 0;
  idTipoFamiliaProducto: number = 0;
  unidadesFijasPallet!: number;
  porcRelacionPallet!: number;
  precioReferencia: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');
  listaIdTipoProducto: TipoProductoData[] = [];
  listaTipoFamiliaProducto: FamiliaData[] = [];

  ngOnInit(): void {
    this.getIdTipoProducto();
    this.getIdTipoFamilia();
  }

  getIdTipoProducto() {
    this.tipoProductoService.getProductos().subscribe((response: any) => {
      const ids = response as TipoProductoData[];
      ids.forEach((element) => {
        this.listaIdTipoProducto.push(element);
      });
    });
  }

  getIdTipoFamilia() {
    this.tipoFamiliaProductoService.getFamilias().subscribe((response: any) => {
      const ids = response as FamiliaData[];
      ids.forEach((element) => {
        this.listaTipoFamiliaProducto.push(element);
      });
    });
  }
  onSend() {
    const producto = new Producto({
      descripcion: this.descripcion,
      idTipoProducto: this.idTipoProducto,
      idTipoFamiliaProducto: this.idTipoFamiliaProducto,
      unidadesFijasPallet: this.unidadesFijasPallet,
      porcRelacionPallet: this.porcRelacionPallet,
      precioReferencia: this.precioReferencia,
      usuarioGraba: this.usuarioGraba,
    });
    this.productosService.postProducto(producto).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/producto/listar`);
    }, 1000);
  }

  goToListarProductosPage() {
    this.router.navigateByUrl(`home/producto/listar`);
  }
}
