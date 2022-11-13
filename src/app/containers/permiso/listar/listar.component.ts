import { Component, OnInit } from '@angular/core';
import { PermisoService } from 'src/app/services/permiso.service';
import {PermisoData} from '../../../models/PermisoData';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private permisoService: PermisoService) { }
  elementos: any = [];

  ngOnInit(): void {
    this.getPermisos();
  }

  getPermisos() {
    this.permisoService.getPermisos().subscribe((response: any) => {
      const permisos = response as PermisoData[];
      permisos.forEach(element => {
        this.elementos.push(element)
      });
    });
  }

}
