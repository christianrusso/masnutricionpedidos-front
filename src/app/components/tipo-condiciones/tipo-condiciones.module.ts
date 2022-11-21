import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { CondicionesRoutingModule } from './tipo-condiciones-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { TipoCondicionesVentaService } from 'src/app/services/tipo-condiciones-venta.service';

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
  providers: [TipoCondicionesVentaService]
})
export class TipoCondicionesModule { }
