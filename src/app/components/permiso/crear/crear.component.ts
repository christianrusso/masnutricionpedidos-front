import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Permiso } from '../../../models/permiso';
import { ActivatedRoute, Router } from '@angular/router';
import { PermisoService } from 'src/app/services/permiso.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly permisoService: PermisoService,
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
    this.permisoService.postPermiso(permiso).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`/permisos/listar`);
    }, 1000);
  }
}
