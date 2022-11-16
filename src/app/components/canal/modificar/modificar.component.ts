import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanalEdit } from 'src/app/models/canal-edit';
import { CanalService } from 'src/app/services/canal.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private canalServices: CanalService, private readonly router: Router,) { }
  creado: boolean = false;
  Descripcion : string = '';
  usuarioGraba : string = '';
  fechaGraba: Date = new Date();
  usuarioModifica: string = '';


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.canalServices.getCanal(this.id).subscribe((response: any) => {
      console.log(response);

      this.Descripcion = response[0].Descripcion;
      this.usuarioGraba = response[0].usuarioGraba;
      this.fechaGraba = response[0].fechaGraba;
      this.usuarioModifica = response[0].usuarioModifica;
      this.creado = false;
      //otrod
    });
  }


  onEdit() {
    const canal = new CanalEdit({
      Descripcion : this.Descripcion,
      fechaGraba : this.fechaGraba,
      usuarioGraba : this.usuarioGraba,
      fechaModifica : new Date(),
      usuarioModifica : this.usuarioModifica,
    });
    this.canalServices.editCanal(canal, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('/canal/listar');
    }, 1000);
  }

}
