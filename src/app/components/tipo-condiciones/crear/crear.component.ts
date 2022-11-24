import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Condicion } from 'src/app/models-tipo/tipo-condicion';
import { TipoCondicionesVentaService } from 'src/app/services/tipo-condiciones-venta.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly tipocondicionService: TipoCondicionesVentaService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  descripcion: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');

  ngOnInit(): void {}

  onSend() {
    const condicion = new Condicion({
      descripcion: this.descripcion,
      usuarioGraba: this.usuarioGraba,
    });
    this.tipocondicionService.postCondicion(condicion).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/tipo-condiciones/listar`);
    }, 1000);
  }
}
