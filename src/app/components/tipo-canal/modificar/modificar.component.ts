import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanalEdit } from 'src/app/models-tipo/tipo-canal-edit';
import { TipoCanalService } from 'src/app/services/tipo-canal.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private tipocanalServices: TipoCanalService, private readonly router: Router,) { }
  creado: boolean = false;
  Descripcion : string = '';
  usuarioGraba : string = '';
  fechaGraba: Date = new Date();
  usuarioModifica: string = '';


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipocanalServices.getCanal(this.id).subscribe((response: any) => {
      this.Descripcion = response[0].Descripcion;
      this.creado = false;
    });
  }


  onEdit() {
    const canal = new CanalEdit({
      Descripcion : this.Descripcion,
      usuarioModifica : this.usuarioModifica,
    });
    this.tipocanalServices.editCanal(canal, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('/tipo-canal/listar');
    }, 1000);
  }

}
