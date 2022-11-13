import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import {ProductoData} from '../../../models/ProductoData';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  constructor(private productoService: ProductoService) { }
  elementos: any = [];

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProductos().subscribe((response: any) => {
      const productos = response as ProductoData[];
      productos.forEach(element => {
        this.elementos.push(element)
      });
    });
  }

}
