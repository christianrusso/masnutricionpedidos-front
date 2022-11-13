import { Component, OnInit } from '@angular/core';
import { Telefono } from 'src/app/models/telefono';
import { TelefonoService } from 'src/app/services/telefono.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  descripcion: string = '';
  usuarioGraba: string = '';
  creado: boolean;

  constructor(private readonly telefonoService: TelefonoService,) {
    this.creado = false;
  }

  ngOnInit(): void {
  }

  onSend() {
    const telefono = new Telefono({
      descripcion: this.descripcion,
      fechaGraba: new Date(),
      usuarioGraba: this.usuarioGraba,
    });
    this.telefonoService.postTelefono(telefono);
    this.creado = true;
  }

}
