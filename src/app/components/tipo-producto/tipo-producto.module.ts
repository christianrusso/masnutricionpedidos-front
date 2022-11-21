import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';
import { ProductoRoutingModule } from './tipo-producto-routing.module';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    ProductoRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [TipoProductoService]
})
export class TipoProductoModule { }
