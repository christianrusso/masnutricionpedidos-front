import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FamiliaEdit } from 'src/app/models/familia-edit';
import { FamiliaProductoService } from 'src/app/services/familia-producto.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private readonly familiaService: FamiliaProductoService, private readonly router: Router,) { }
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
    this.familiaService.getFamilia(this.id).subscribe((response: any) => {
      console.log(response);

      this.descripcion = response[0].descripcion;
      this.DescBreve = response[0].DescBreve;
      this.unidadesFijasPallet = response[0].unidadesFijasPallet;
      this.porcRelacionPallet = response[0].porcRelacionPallet;
      this.fechaGraba = response[0].fechaGraba;
      this.usuarioGraba = response[0].usuarioGraba;
      this.usuarioModifica = response[0].usuarioModifica;
      this.creado = false;
      //otrod
    });
  }


  onEdit() {
    const familia = new FamiliaEdit({
      descripcion : this.descripcion,
      DescBreve: this.DescBreve,
      unidadesFijasPallet: this.unidadesFijasPallet,
      porcRelacionPallet: this.porcRelacionPallet,
      fechaGraba : this.fechaGraba,
      usuarioGraba : this.usuarioGraba,
      fechaModifica : new Date(),
      usuarioModifica : this.usuarioModifica,
    });
    this.familiaService.editFamilia(familia, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('/familia-producto/listar');
    }, 1000);
  }

}
