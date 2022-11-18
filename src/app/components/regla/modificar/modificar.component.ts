import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReglaEdit } from 'src/app/models/regla-edit';
import { ReglaComercialService } from 'src/app/services/regla-comercial.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private readonly reglaComercialService: ReglaComercialService, private readonly router: Router,) { }
  creado: boolean = false;
  Descripcion : string = '';
  usuarioGraba : string = '';
  fechaGraba: Date = new Date();
  usuarioModifica: string = '';


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reglaComercialService.getRegla(this.id).subscribe((response: any) => {
      console.log(response);

      this.Descripcion = response[0].Descripcion;
      this.usuarioGraba = response[0].usuarioGraba;
      this.fechaGraba = response[0].fechaGraba;
      this.usuarioModifica = response[0].usuarioModifica;
      this.creado = false;
      //otrod
    });
  }


  onEdit() {
    const regla = new ReglaEdit({
      Descripcion : this.Descripcion,
      fechaGraba : this.fechaGraba,
      usuarioGraba : this.usuarioGraba,
      fechaModifica : new Date(),
      usuarioModifica : this.usuarioModifica,
    });
    this.reglaComercialService.editRegla(regla, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('/regla-comercial/listar');
    }, 1000);
  }

}
