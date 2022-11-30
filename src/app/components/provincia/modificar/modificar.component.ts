import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvinciaEdit } from 'src/app/models/provincia-edit';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private provinciaServices: ProvinciaService, private readonly router: Router,) { }
  creado: boolean = false;
  Descripcion : string = '';
  DescBreve: string = '';
  usuarioModifica: any = localStorage.getItem('NickName');


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.provinciaServices.getProvincia(this.id).subscribe((response: any) => {
      this.Descripcion = response[0].Descripcion;
      this.DescBreve = response[0].DescBreve;
      this.creado = false;
    });
  }


  onEdit() {
    const provincia = new ProvinciaEdit({
      Descripcion : this.Descripcion,
      DescBreve: this.DescBreve
    });
    this.provinciaServices.editProvincia(provincia, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/provincia/listar');
    }, 1000);
  }

  goToListarProvinciasPage(){
    this.router.navigateByUrl(`home/provincia/listar`);
  }

}
