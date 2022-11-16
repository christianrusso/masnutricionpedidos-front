import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { CanalRoutingModule } from './canal-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { CanalService } from 'src/app/services/canal.service';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
  ],
  imports: [
    CanalRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [CanalService]
})
export class CanalModule { }
