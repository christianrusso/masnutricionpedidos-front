import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IVA } from 'src/app/models-tipo/tipo-iva';
import { TipoIvaService } from 'src/app/services/tipo-iva.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly tipoivaService: TipoIvaService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  Descripcion: string = '';
  DescBreve: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');

  ngOnInit(): void {}

  onSend() {
    const iva = new IVA({
      Descripcion: this.Descripcion,
      DescBreve : this.DescBreve,
      usuarioGraba: this.usuarioGraba,
    });
    this.tipoivaService.postIVA(iva).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/tipo-iva/listar`);
    }, 1000);
  }

  goToListarTipoIVAPage(){
    this.router.navigateByUrl(`home/tipo-iva/listar`);
  }
}
