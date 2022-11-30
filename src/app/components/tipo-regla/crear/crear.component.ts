import { Component, OnInit } from '@angular/core';
import { Regla } from '../../../models-tipo/tipo-regla';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoReglaComercialService } from 'src/app/services/tipo-regla-comercial.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly tiporeglaComercialService: TipoReglaComercialService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  Descripcion: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');

  ngOnInit(): void {}

  onSend() {
    const regla = new Regla({
      Descripcion: this.Descripcion,
      usuarioGraba: this.usuarioGraba,
    });
    this.tiporeglaComercialService.postRegla(regla).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/tipo-regla-comercial/listar`);
    }, 1000);
  }

  goToListarTipoReglaPage(){
    this.router.navigateByUrl(`home/tipo-regla-comercial/listar`);
  }
}
