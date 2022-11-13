import { Component, OnInit } from '@angular/core';
import { CondicionesVentaService } from 'src/app/services/condiciones-venta.service';
import {CondicionData} from '../../../models/CondicionData';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  constructor(private condicionesService: CondicionesVentaService) { }
  elementos: any = [];

  ngOnInit(): void {
    this.getCondiciones();
  }

  getCondiciones() {
    this.condicionesService.getCondiciones().subscribe((response: any) => {
      const condiciones = response as CondicionData[];
      condiciones.forEach(element => {
        this.elementos.push(element)
      });
    });
  }

}
