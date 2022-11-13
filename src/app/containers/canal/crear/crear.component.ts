import { Component, OnInit } from '@angular/core';
import { CanalService } from 'src/app/services/canal.service';
import { Canal } from '../../../models/canal';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  Descripcion: string = '';
  usuarioGraba: string = '';
  creado: boolean;

  constructor(private readonly canalService: CanalService,) {
    this.creado = false;
  }

  ngOnInit(): void {
  }

  onSend() {
    const canal = new Canal({
      Descripcion: this.Descripcion,
      fechaGraba: new Date(),
      usuarioGraba: this.usuarioGraba,
    });
    this.canalService.postCanal(canal);
    this.creado = true;
  }

}

