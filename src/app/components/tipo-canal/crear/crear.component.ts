import { Component, OnInit } from '@angular/core';
import { TipoCanalService } from 'src/app/services/tipo-canal.service';
import { Canal } from '../../../models-tipo/tipo-canal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly tipocanalService: TipoCanalService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  Descripcion: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');

  ngOnInit(): void {}

  onSend() {
    const canal = new Canal({
      Descripcion: this.Descripcion,
      usuarioGraba: this.usuarioGraba,
    });
    this.tipocanalService.postCanal(canal).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/tipo-canal/listar`);
    }, 1000);
  }

  goToListarTipoCanalesPage(){
    this.router.navigateByUrl(`home/tipo-canal/listar`);
  }
}
