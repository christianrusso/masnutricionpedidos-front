import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  descripcion: string = '';
  DescBreve: string = '';
  usuarioGraba: string = '';
  creado: boolean;

  constructor(private readonly productoService: ProductoService,) {
    this.creado = false;
  }

  ngOnInit(): void {
  }

  onSend() {
    const producto = new Producto({
      descripcion: this.descripcion,
      DescBreve: this.DescBreve,
      fechaGraba: new Date(),
      usuarioGraba: this.usuarioGraba,
    });
    this.productoService.postProducto(producto);
    this.creado = true;
  }

}
