import { Component, OnInit } from '@angular/core';
import { ReglaComercialService } from 'src/app/services/regla-comercial.service';
import {ReglaData} from '../../../models/ReglaData';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  constructor(private reglaService: ReglaComercialService) { }
  elementos: any = [];

  ngOnInit(): void {
    this.getReglas();
  }

  getReglas() {
    this.reglaService.getReglas().subscribe((response: any) => {
      const reglas = response as ReglaData[];
      reglas.forEach(element => {
        this.elementos.push(element)
      });
    });
  }
}
