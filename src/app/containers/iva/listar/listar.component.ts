import { Component, OnInit } from '@angular/core';
import { IvaService } from 'src/app/services/iva.service';
import {IvaData} from '../../../models/IvaData';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private ivaService: IvaService) { }
  elementos: any = [];

  ngOnInit(): void {
    this.getIVA();
  }

  getIVA() {
    this.ivaService.getIVA().subscribe((response: any) => {
      const iva = response as IvaData[];
      iva.forEach(element => {
        this.elementos.push(element)
      });
    });
  }

}
