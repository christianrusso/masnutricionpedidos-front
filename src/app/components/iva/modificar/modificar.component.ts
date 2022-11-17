import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FamiliaEdit } from 'src/app/models/familia-edit';
import { IVAEdit } from 'src/app/models/iva-edit';
import { FamiliaProductoService } from 'src/app/services/familia-producto.service';
import { IvaService } from 'src/app/services/iva.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private readonly ivaService: IvaService, private readonly router: Router,) { }
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
    this.ivaService.getIVA(this.id).subscribe((response: any) => {
      console.log(response);
      this.Descripcion = response[0].Descripcion;
      this.DescBreve = response[0].DescBreve;
      this.fechaGraba = response[0].fechaGraba;
      this.usuarioGraba = response[0].usuarioGraba;
      this.usuarioModifica = response[0].usuarioModifica;
      this.creado = false;
      //otrod
    });
  }


  onEdit() {
    const iva = new IVAEdit({
      Descripcion : this.Descripcion,
      DescBreve: this.DescBreve,
      fechaGraba : this.fechaGraba,
      usuarioGraba : this.usuarioGraba,
      fechaModifica : new Date(),
      usuarioModifica : this.usuarioModifica,
    });
    this.ivaService.editIVA(iva, this.id).subscribe(response => {
      return response;
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('/iva/listar');
    }, 1000);
  }

}
