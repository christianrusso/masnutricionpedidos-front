import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { AccesoRoutingModule } from './acceso-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { GrupoAccesoService } from 'src/app/services/grupo-acceso.service';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';



@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    AccesoRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [GrupoAccesoService]
})
export class AccesoModule { }
