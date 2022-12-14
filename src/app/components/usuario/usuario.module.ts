import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioRoutingModule } from './usuario-rounting.module';
import { RolComponent } from './rol/rol.component';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent,
    RolComponent
  ],
  imports: [
    UsuarioRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
