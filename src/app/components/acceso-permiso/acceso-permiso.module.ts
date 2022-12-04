import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { AccesoPermisoRoutingModule } from './acceso-permiso-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { GrupoAccesoPermisoService } from 'src/app/services/grupo-acceso-permiso.service';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { TipoPermisoService } from 'src/app/services/tipo-permiso.service';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    AccesoPermisoRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [GrupoAccesoPermisoService, TipoPermisoService]
})
export class AccesoPermisoModule { }
