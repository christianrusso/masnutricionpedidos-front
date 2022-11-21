import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Condicion } from 'src/app/models/condicion';
import { TipoCondicionesVentaService } from 'src/app/services/tipo-condiciones-venta.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly tipocondicionService: TipoCondicionesVentaService,
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
    this.tipocondicionService.postCondicion(condicion).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`/tipo-condiciones/listar`);
    }, 1000);
  }
}
