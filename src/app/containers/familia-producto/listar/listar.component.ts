import { Component, OnInit } from '@angular/core';
import { FamiliaProductoService } from 'src/app/services/familia-producto.service';
import {FamiliaData} from '../../../models/FamiliaData';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  constructor(private familiaService: FamiliaProductoService) { }
  elementos: any = [];

  ngOnInit(): void {
    this.getFamilias();
  }

  getFamilias() {
    this.familiaService.getFamilias().subscribe((response: any) => {
      const familias = response as FamiliaData[];
      familias.forEach(element => {
        this.elementos.push(element)
      });
    });
  }

}
