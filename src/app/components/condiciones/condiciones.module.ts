import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { CondicionesRoutingModule } from './condiciones-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { CondicionesVentaService } from 'src/app/services/condiciones-venta.service';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    CondicionesRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [CondicionesVentaService]
})
export class CondicionesModule { }
