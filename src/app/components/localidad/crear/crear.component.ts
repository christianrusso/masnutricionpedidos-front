import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Localidad } from 'src/app/models/localidad';
import { Provincia } from 'src/app/models/provincia';
import { ProvinciaData } from 'src/app/models/ProvinciaData';
import { LocalidadService } from 'src/app/services/localidad.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly localidadService: LocalidadService,
    private readonly provinciaService: ProvinciaService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  Descripcion: string = '';
  DescBreve: string = '';
  idProvincia: number = 0;
  CodigoPostal: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');
  provinciasLista: ProvinciaData[] = [];

  ngOnInit(): void {
    this.getidProvincia();
  }

  getidProvincia(){
    this.provinciaService.getProvincias().subscribe((response: any) => {
      const provincias = response as ProvinciaData[];
      provincias.forEach(element => {
        this.provinciasLista.push(element);
      });
    });
  }

  onSend() {
    const localidad = new Localidad({
      idProvincia: this.idProvincia,
      DescBreve: this.DescBreve,
      Descripcion: this.Descripcion,
      CodigoPostal: this.CodigoPostal
    });
    this.localidadService.postLocalidad(localidad).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/localidad/listar`);
    }, 1000);
  }
}
