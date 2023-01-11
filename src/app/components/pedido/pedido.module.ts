import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { PedidoRoutingModule } from './pedido-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { EmpresaService } from 'src/app/services/empresa.service';
import { TipoClienteService } from 'src/app/services/tipo-cliente.service';
import { VendedorService } from 'src/app/services/vendedor.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderFormComponent } from './order-form/order-form.component';
import { DetailOrderFormComponent } from './detail-order-form/detail-order-form.component';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent,
    OrderFormComponent,
    DetailOrderFormComponent
  ],
  imports: [
    PedidoRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [ClienteService,TipoClienteService, EmpresaService, VendedorService, PedidoService]
})
export class PedidoModule { }
