import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaProductoEdit } from 'src/app/models/categoria-producto-edit';
import { ProvinciaData } from 'src/app/models/ProvinciaData';
import { CategoriaProductoService } from 'src/app/services/categoria-producto.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private provinciaService: ProvinciaService,
    private categoriaService: CategoriaProductoService,
    private readonly router: Router
  ) {}
  creado: boolean = false;
  descripcion: string = '';
  provinciasLista: ProvinciaData[] = [];
  usuarioModifica: any = localStorage.getItem('NickName');

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoriaService.getCategoria(this.id).subscribe((response: any) => {
      this.descripcion = response[0].descripcion;
      this.creado = false;
    });
  }


  onEdit() {
    const categoria = new CategoriaProductoEdit({
      descripcion: this.descripcion,
      usuarioModifica: this.usuarioModifica
    });
    this.categoriaService
      .editCategoria(categoria, this.id)
      .subscribe((response) => {
        return response;
      });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/categoria/listar');
    }, 1000);
  }

  goToListarCategoriaPage(){
    this.router.navigateByUrl(`home/categoria/listar`);
  }
}
