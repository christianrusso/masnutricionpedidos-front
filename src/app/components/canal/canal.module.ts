import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { CanalRoutingModule } from './canal-rounting.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CanalRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class CanalModule { }
