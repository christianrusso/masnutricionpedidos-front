import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Telefono } from 'src/app/models/telefono';
import { TipoTelefonoService } from 'src/app/services/tipo-telefono.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly tipotelefonoService: TipoTelefonoService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  descripcion: string = '';
  usuarioGraba: string = '';

  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {}

  onSend() {
    const telefono = new Telefono({
      descripcion: this.descripcion,
      usuarioGraba: this.usuarioGraba,
    });
    this.tipotelefonoService.postTelefono(telefono).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`/tipo-telefonos/listar`);
    }, 1000);
  }
}
