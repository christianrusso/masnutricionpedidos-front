import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models-tipo/tipo-producto';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly tipoproductoService: TipoProductoService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  descripcion: string = '';
  DescBreve: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');

  ngOnInit(): void {}

  onSend() {
    const producto = new Producto({
      descripcion: this.descripcion,
      DescBreve : this.DescBreve,
      usuarioGraba: this.usuarioGraba,
    });
    this.tipoproductoService.postProducto(producto).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/tipo-productos/listar`);
    }, 1000);
  }
}
