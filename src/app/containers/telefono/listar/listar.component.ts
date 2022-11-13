import { Component, OnInit } from '@angular/core';
import { TelefonoService } from 'src/app/services/telefono.service';
import {TelefonoData} from '../../../models/TelefonoData';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private telefonoService: TelefonoService) { }
  elementos: any = [];

  ngOnInit(): void {
    this.getTelefonos();
  }

  getTelefonos() {
    this.telefonoService.getTelefonos().subscribe((response: any) => {
      const telefonos = response as TelefonoData[];
      telefonos.forEach(element => {
        this.elementos.push(element)
      });
    });
  }

}
