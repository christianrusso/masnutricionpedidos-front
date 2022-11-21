import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Familia } from 'src/app/models-tipo/tipo-familia';
import { TipoFamiliaProductoService } from 'src/app/services/tipo-familia-producto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly tipofamiliaService: TipoFamiliaProductoService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  descripcion: string = '';
  usuarioGraba: string = '';
  DescBreve: string = '';
  unidadesFijasPallet: number = 0;
  porcRelacionPallet: number = 0;

  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {}

  onSend() {
    const familia = new Familia({
      descripcion: this.descripcion,
      DescBreve : this.DescBreve,
      unidadesFijasPallet : this.unidadesFijasPallet,
      porcRelacionPallet : this.porcRelacionPallet,
      usuarioGraba: this.usuarioGraba,
    });
    this.tipofamiliaService.postFamilia(familia).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`/tipo-familia-producto/listar`);
    }, 1000);
  }
}
