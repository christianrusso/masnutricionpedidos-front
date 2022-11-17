import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { FamiliaRoutingModule } from './familia-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { FamiliaProductoService } from 'src/app/services/familia-producto.service';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    FamiliaRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [FamiliaProductoService]
})
export class FamiliaProductoModule { }
