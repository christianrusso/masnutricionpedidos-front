import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoClienteService } from 'src/app/services/tipo-cliente.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly tipoclienteService: TipoClienteService,
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
    const cliente = new Cliente({
      Descripcion: this.Descripcion,
      usuarioGraba: this.usuarioGraba,
    });
    this.tipoclienteService.postCliente(cliente).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`/tipo-cliente/listar`);
    }, 1000);
  }
}
