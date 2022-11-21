import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ClienteRoutingModule } from './tipo-cliente-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { TipoClienteService } from 'src/app/services/tipo-cliente.service';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    ClienteRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [TipoClienteService]
})
export class TipoClienteModule { }
