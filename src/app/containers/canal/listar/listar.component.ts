import { Component, OnInit } from '@angular/core';
import { CanalService } from 'src/app/services/canal.service';
import {CanalData} from '../../../models/CanalData';
import {cilPencil,cilTrash} from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  constructor(private canalServices: CanalService, public iconSet: IconSetService) {
    iconSet.icons = {
      cilPencil,
      cilTrash
    };
  }

  idTipoCanal: any = [];
  Descripcion: any = [];
  fechaGraba: any = [];
  usuarioGraba: any = [];
  fechaModifica: any = [];
  usuarioModifica: any = [];
  elementos: any = [];

  ngOnInit(): void {
    this.getCanals();
  }

  getCanals() {
    this.canalServices.getCanales().subscribe((response: any) => {
      const canales = response as CanalData[];
      canales.forEach(element => {
        this.elementos.push(element)
      });
    });
  }
}
