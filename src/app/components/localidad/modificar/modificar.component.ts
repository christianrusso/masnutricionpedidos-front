import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalidadEdit } from 'src/app/models/localidad-edit';
import { ProvinciaData } from 'src/app/models/ProvinciaData';
import { LocalidadService } from 'src/app/services/localidad.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private provinciaService: ProvinciaService,
    private localidadService: LocalidadService,
    private readonly router: Router
  ) {}
  creado: boolean = false;
  idProvincia: number = 0;
  Descripcion: string = '';
  DescBreve: string = '';
  CodigoPostal: string = '';
  provinciasLista: ProvinciaData[] = [];
  usuarioModifica: any = localStorage.getItem('NickName');

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getidProvincia();
    this.localidadService.getLocalidad(this.id).subscribe((response: any) => {
      this.idProvincia = response[0].idProvincia;
      console.log(this.idProvincia);
      this.Descripcion = response[0].Descripcion;
      this.DescBreve = response[0].DescBreve;
      this.CodigoPostal = response[0].CodigoPostal;
      this.creado = false;
    });
  }

  getidProvincia() {
    this.provinciaService.getProvincias().subscribe((response: any) => {
      const provincias = response as ProvinciaData[];
      provincias.forEach((element) => {
        this.provinciasLista.push(element);
      });
    });
  }

  onEdit() {
    const localidad = new LocalidadEdit({
      idProvincia: this.idProvincia,
      Descripcion: this.Descripcion,
      DescBreve: this.DescBreve,
      CodigoPostal: this.CodigoPostal
    });
    this.localidadService
      .editLocalidad(localidad, this.id)
      .subscribe((response) => {
        return response;
      });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/localidad/listar');
    }, 1000);
  }
}
