import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { OperacionRoutingModule } from './operacion-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { DetalleOperacionService } from 'src/app/services/detalle-operacion.service';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { DetallePedidoService } from 'src/app/services/detalle-pedido.service';
import { PedidoService } from 'src/app/services/pedido.service';



@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    OperacionRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [DetalleOperacionService, DetallePedidoService, PedidoService]
})
export class OperacionModule { }
