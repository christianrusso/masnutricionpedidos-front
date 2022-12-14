import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { PermisoRoutingModule } from './tipo-permiso-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { TipoPermisoService } from 'src/app/services/tipo-permiso.service';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    PermisoRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [TipoPermisoService]
})
export class TipoPermisoModule { }
