import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReglaEdit } from 'src/app/models-tipo/tipo-regla-edit';
import { TipoReglaComercialService } from 'src/app/services/tipo-regla-comercial.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private readonly tiporeglaComercialService: TipoReglaComercialService, private readonly router: Router,) { }
  creado: boolean = false;
  Descripcion : string = '';
  usuarioModifica: any = localStorage.getItem('NickName');


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tiporeglaComercialService.getRegla(this.id).subscribe((response: any) => {
      this.Descripcion = response[0].Descripcion;
      this.creado = false;
    });
  }


  onEdit() {
    const regla = new ReglaEdit({
      Descripcion : this.Descripcion,
      usuarioModifica : this.usuarioModifica,
    });
    this.tiporeglaComercialService.editRegla(regla, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/tipo-regla-comercial/listar');
    }, 1000);
  }

  goToListarTipoReglaPage(){
    this.router.navigateByUrl(`home/tipo-regla-comercial/listar`);
  }
}
