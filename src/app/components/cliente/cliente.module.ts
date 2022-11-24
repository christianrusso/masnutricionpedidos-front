import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ClienteRoutingModule } from './cliente-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { ClienteService } from 'src/app/services/cliente.service';
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
  providers: [ClienteService]
})
export class ClienteModule { }
