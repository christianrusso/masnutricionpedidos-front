import { Component, OnInit } from '@angular/core';
import { Familia } from 'src/app/models/familia';
import { FamiliaProductoService } from 'src/app/services/familia-producto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  descripcion: string = '';
  DescBreve: string = '';
  unidadesFijasPallet : number = 0;
  porcRelacionPallet : number = 0;
  usuarioGraba: string = '';
  creado: boolean;

  constructor(private readonly familiaService: FamiliaProductoService,) {
    this.creado = false;
  }

  ngOnInit(): void {
  }

  onSend() {
    const familia = new Familia({
      descripcion: this.descripcion,
      DescBreve: this.DescBreve,
      unidadesFijasPallet: this.unidadesFijasPallet,
      porcRelacionPallet: this.porcRelacionPallet,
      fechaGraba: new Date(),
      usuarioGraba: this.usuarioGraba,
    });
    this.familiaService.postFamilia(familia);
    this.creado = true;
  }
}
