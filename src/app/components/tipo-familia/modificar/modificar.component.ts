import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FamiliaEdit } from 'src/app/models-tipo/tipo-familia-edit';
import { TipoFamiliaProductoService } from 'src/app/services/tipo-familia-producto.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private readonly tipofamiliaService: TipoFamiliaProductoService, private readonly router: Router,) { }
  creado: boolean = false;
  descripcion : string = '';
  DescBreve: string = '';
  unidadesFijasPallet: number = 0;
  porcRelacionPallet: number = 0;
  usuarioModifica: any = localStorage.getItem('NickName');


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipofamiliaService.getFamilia(this.id).subscribe((response: any) => {
      this.descripcion = response[0].descripcion;
      this.DescBreve = response[0].DescBreve;
      this.unidadesFijasPallet = response[0].unidadesFijasPallet;
      this.porcRelacionPallet = response[0].porcRelacionPallet;
      this.creado = false;
    });
  }


  onEdit() {
    const familia = new FamiliaEdit({
      descripcion : this.descripcion,
      DescBreve: this.DescBreve,
      unidadesFijasPallet: this.unidadesFijasPallet,
      porcRelacionPallet: this.porcRelacionPallet,
      usuarioModifica : this.usuarioModifica,
    });
    this.tipofamiliaService.editFamilia(familia, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/tipo-familia-producto/listar');
    }, 1000);
  }

}
