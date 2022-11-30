import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from './bienvenida.component';
import { SharedModule } from '../../shared/shared.module';
import { BienvenidaRoutingModule } from './bienvenida-rounting.module';



@NgModule({
  declarations: [
    BienvenidaComponent
  ],
  imports: [
    BienvenidaRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class BienvenidaModule { }
