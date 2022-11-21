import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FamiliaEdit } from 'src/app/models/familia-edit';
import { IVAEdit } from 'src/app/models/iva-edit';
import { TipoIvaService } from 'src/app/services/tipo-iva.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private readonly tipoivaService: TipoIvaService, private readonly router: Router,) { }
  creado: boolean = false;
  Descripcion : string = '';
  usuarioGraba : string = '';
  fechaGraba: Date = new Date();
  usuarioModifica: string = '';
  DescBreve: string = '';
  unidadesFijasPallet: number = 0;
  porcRelacionPallet: number = 0;


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipoivaService.getIVA(this.id).subscribe((response: any) => {
      this.Descripcion = response[0].Descripcion;
      this.DescBreve = response[0].DescBreve;
      this.creado = false;
    });
  }


  onEdit() {
    const iva = new IVAEdit({
      Descripcion : this.Descripcion,
      DescBreve: this.DescBreve,
      usuarioModifica : this.usuarioModifica,
    });
    this.tipoivaService.editIVA(iva, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('/tipo-iva/listar');
    }, 1000);
  }

}
