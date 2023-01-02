import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductoEdit } from 'src/app/models/producto-edit';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoData } from 'src/app/models/ProductoData';
import { TipoProductoData } from 'src/app/models-tipo/TipoProductoData';
import { FamiliaData } from 'src/app/models-tipo/TipoFamiliaData';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';
import { TipoFamiliaProductoService } from 'src/app/services/tipo-familia-producto.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  creado: boolean;
  constructor(
    private productosService: ProductoService,
    private tipoProductoService : TipoProductoService,
    private tipoFamiliaProductoService : TipoFamiliaProductoService,
    private route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  myControl = new UntypedFormControl();
  options: ProductoData[] = [];
  filteredOptions?: Observable<ProductoData[]>;
  selected = 'option2';

  id: number = 0;
  descripcion: string = '';
  idTipoProducto: number = 0;
  idTipoFamiliaProducto: number = 0;
  unidadesFijasPallet: number = 0;
  porcRelacionPallet: number = 0;
  precioReferencia: string = '';
  codigo: number = 0;
  listaIdTipoProducto: TipoProductoData[] = [];
  listaTipoFamiliaProducto: FamiliaData[] = [];
  usuarioModifica: any = localStorage.getItem('NickName');
  ngOnInit(): void {
    this.getIdTipoProducto();
    this.getIdTipoFamilia();
    this.id = this.route.snapshot.params['id'];
    this.productosService.getProducto(this.id).subscribe((response: any) => {
      this.descripcion = response[0].descripcion;
      this.idTipoProducto = response[0].idTipoProducto;
      this.idTipoFamiliaProducto = response[0].idTipoFamiliaProducto;
      this.unidadesFijasPallet = response[0].unidadesFijasPallet;
      this.precioReferencia = response[0].precioReferencia;
      this.codigo = response[0].codigo;
      this.porcRelacionPallet = response[0].porcRelacionPallet;
      this.creado = false;
    });
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

  onEdit() {
    const producto = new ProductoEdit({
      descripcion: this.descripcion,
      idTipoProducto: this.idTipoProducto,
      idTipoFamiliaProducto: this.idTipoFamiliaProducto,
      unidadesFijasPallet: this.unidadesFijasPallet,
      porcRelacionPallet: this.porcRelacionPallet,
      precioReferencia: this.precioReferencia,
      codigo: this.codigo,
      usuarioModifica: this.usuarioModifica,
    });
    this.productosService
      .editProducto(producto, this.id)
      .subscribe((response) => {
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
