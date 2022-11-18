import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoEdit } from 'src/app/models/producto-edit';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private readonly productoService: ProductoService, private readonly router: Router,) { }
  creado: boolean = false;
  descripcion : string = '';
  usuarioGraba : string = '';
  fechaGraba: Date = new Date();
  usuarioModifica: string = '';
  DescBreve: string = '';
  unidadesFijasPallet: number = 0;
  porcRelacionPallet: number = 0;


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.getProducto(this.id).subscribe((response: any) => {
      console.log(response);
      this.descripcion = response[0].descripcion;
      this.DescBreve = response[0].DescBreve;
      this.fechaGraba = response[0].fechaGraba;
      this.usuarioGraba = response[0].usuarioGraba;
      this.usuarioModifica = response[0].usuarioModifica;
      this.creado = false;
      //otrod
    });
  }


  onEdit() {
    const producto = new ProductoEdit({
      descripcion : this.descripcion,
      DescBreve: this.DescBreve,
      fechaGraba : this.fechaGraba,
      usuarioGraba : this.usuarioGraba,
      fechaModifica : new Date(),
      usuarioModifica : this.usuarioModifica,
    });
    this.productoService.editProducto(producto, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('/productos/listar');
    }, 1000);
  }

}
