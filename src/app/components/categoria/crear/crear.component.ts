import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaProducto } from 'src/app/models/categoria-producto';
import { Localidad } from 'src/app/models/localidad';
import { Provincia } from 'src/app/models/provincia';
import { ProvinciaData } from 'src/app/models/ProvinciaData';
import { CategoriaProductoService } from 'src/app/services/categoria-producto.service';
import { LocalidadService } from 'src/app/services/localidad.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent {
  creado: boolean;
  constructor(
    private readonly categoriaService: CategoriaProductoService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  descripcion: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');
  provinciasLista: ProvinciaData[] = [];

  onSend() {
    const categoria = new CategoriaProducto({
      descripcion: this.descripcion,
      usuarioGraba: this.usuarioGraba
    });
    console.log(categoria);

    this.categoriaService.postCategoria(categoria).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/categoria/listar`);
    }, 1000);
  }

  goToListarCategoriasPage(){
    this.router.navigateByUrl(`home/categoria/listar`);
  }
}
