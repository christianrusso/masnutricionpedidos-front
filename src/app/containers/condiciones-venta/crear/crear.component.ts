import { Component, OnInit } from '@angular/core';
import { Condicion } from 'src/app/models/condicion';
import { CondicionesVentaService } from 'src/app/services/condiciones-venta.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  descripcion: string = '';
  usuarioGraba: string = '';
  creado: boolean;

  constructor(private readonly condicionService: CondicionesVentaService,) {
    this.creado = false;
  }

  ngOnInit(): void {
  }

  onSend() {
    const condicion = new Condicion({
      descripcion: this.descripcion,
      fechaGraba: new Date(),
      usuarioGraba: this.usuarioGraba,
    });
    this.condicionService.postCondicion(condicion);
    this.creado = true;
  }

}
