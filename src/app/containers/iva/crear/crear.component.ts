import { Component, OnInit } from '@angular/core';
import { IVA } from 'src/app/models/iva';
import { IvaService } from 'src/app/services/iva.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  Descripcion: string = '';
  DescBreve: string = '';
  usuarioGraba: string = '';
  creado: boolean;

  constructor(private readonly IvaService: IvaService,) {
    this.creado = false;
  }

  ngOnInit(): void {
  }

  onSend() {
    const iva = new IVA({
      Descripcion: this.Descripcion,
      DescBreve: this.DescBreve,
      fechaGraba: new Date(),
      usuarioGraba: this.usuarioGraba,
    });
    this.IvaService.postIVA(iva);
    this.creado = true;
  }
}
