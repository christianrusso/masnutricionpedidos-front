import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoEdit } from 'src/app/models-tipo/tipo-producto-edit';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private readonly tipoproductoService: TipoProductoService, private readonly router: Router,) { }
  creado: boolean = false;
  descripcion : string = '';
  DescBreve: string = '';
  usuarioModifica: any = localStorage.getItem('NickName');


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipoproductoService.getProducto(this.id).subscribe((response: any) => {
      this.descripcion = response[0].descripcion;
      this.DescBreve = response[0].DescBreve;
      this.creado = false;
    });
  }


  onEdit() {
    const producto = new ProductoEdit({
      descripcion : this.descripcion,
      DescBreve: this.DescBreve,
      usuarioModifica : this.usuarioModifica,
    });
    this.tipoproductoService.editProducto(producto, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/tipo-productos/listar');
    }, 1000);
  }

  goToListarTipoProductoPage(){
    this.router.navigateByUrl(`home/tipo-productos/listar`);
  }

}
