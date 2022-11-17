import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IVA } from 'src/app/models/iva';
import { IvaService } from 'src/app/services/iva.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly ivaService: IvaService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  Descripcion: string = '';
  usuarioGraba: string = '';
  DescBreve: string = '';

  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {}

  onSend() {
    const iva = new IVA({
      Descripcion: this.Descripcion,
      DescBreve : this.DescBreve,
      usuarioGraba: this.usuarioGraba,
    });
    this.ivaService.postIVA(iva).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`/iva/listar`);
    }, 1000);
  }
}
