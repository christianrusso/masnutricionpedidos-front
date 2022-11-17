import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Condicion } from 'src/app/models/condicion';
import { CondicionesVentaService } from 'src/app/services/condiciones-venta.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly condicionService: CondicionesVentaService,
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
    const condicion = new Condicion({
      descripcion: this.descripcion,
      usuarioGraba: this.usuarioGraba,
    });
    this.condicionService.postCondicion(condicion).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`/condiciones/listar`);
    }, 1000);
  }
}
