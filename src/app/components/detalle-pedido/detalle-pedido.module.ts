import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { DetallePedidoRoutingModule } from './detalle-pedido-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { DetallePedidoService } from 'src/app/services/detalle-pedido.service';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { PedidoService } from 'src/app/services/pedido.service';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent,
    DetallesComponent
  ],
  imports: [
    DetallePedidoRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [DetallePedidoService, PedidoService]
})
export class DetallePedidoModule { }
