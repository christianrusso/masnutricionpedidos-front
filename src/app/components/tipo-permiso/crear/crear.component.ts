import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Permiso } from '../../../models-tipo/tipo-permiso';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoPermisoService } from 'src/app/services/tipo-permiso.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly tipopermisoService: TipoPermisoService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  Descripcion: string = '';
  usuarioGraba: string = '';

  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {}

  onSend() {
    const permiso = new Permiso({
      Descripcion: this.Descripcion,
      usuarioGraba: this.usuarioGraba,
    });
    this.tipopermisoService.postPermiso(permiso).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`/tipo-permisos/listar`);
    }, 1000);
  }
}
