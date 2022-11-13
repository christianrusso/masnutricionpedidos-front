import { Component, OnInit } from '@angular/core';
import { Regla } from 'src/app/models/regla';
import { ReglaComercialService } from 'src/app/services/regla-comercial.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  Descripcion: string = '';
  usuarioGraba: string = '';
  creado: boolean;

  constructor(private readonly reglaService: ReglaComercialService,) {
    this.creado = false;
  }

  ngOnInit(): void {
  }

  onSend() {
    const regla = new Regla({
      Descripcion: this.Descripcion,
      fechaGraba: new Date(),
      usuarioGraba: this.usuarioGraba,
    });
    this.reglaService.postRegla(regla);
    this.creado = true;
  }

}
