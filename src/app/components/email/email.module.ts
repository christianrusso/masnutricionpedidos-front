import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EmailRoutingModule } from './email-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { EmailService } from 'src/app/services/email.service';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { ClienteService } from 'src/app/services/cliente.service';



@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    EmailRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [EmailService, ClienteService]
})
export class EmailModule { }
