import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Regla } from '../../../models/regla';
import { ActivatedRoute, Router } from '@angular/router';
import { ReglaComercialService } from 'src/app/services/regla-comercial.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly reglaComercialService: ReglaComercialService,
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
    const regla = new Regla({
      Descripcion: this.Descripcion,
      usuarioGraba: this.usuarioGraba,
    });
    this.reglaComercialService.postRegla(regla).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`/regla-comercial/listar`);
    }, 1000);
  }
}
