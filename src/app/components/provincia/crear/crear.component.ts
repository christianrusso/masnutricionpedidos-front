import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from 'src/app/models/provincia';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly provinciaService: ProvinciaService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  Descripcion: string = '';
  DescBreve: string = '';
  usuarioGraba: any = localStorage.getItem('NickName');

  ngOnInit(): void {}

  onSend() {
    const provincia = new Provincia({
      DescBreve: this.DescBreve,
      Descripcion: this.Descripcion,
    });
    this.provinciaService.postProvincia(provincia).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/provincia/listar`);
    }, 1000);
  }

  goToListarProvinciasPage(){
    this.router.navigateByUrl(`home/provincia/listar`);
  }
}
