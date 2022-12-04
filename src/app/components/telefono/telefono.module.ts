import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { TelefonoRoutingModule } from './telefono-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { TelefonoService } from 'src/app/services/telefono.service';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { TipoTelefonoService } from 'src/app/services/tipo-telefono.service';
import { ClienteService } from 'src/app/services/cliente.service';



@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    TelefonoRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [TelefonoService, ClienteService, TipoTelefonoService]
})
export class TelefonoModule { }
