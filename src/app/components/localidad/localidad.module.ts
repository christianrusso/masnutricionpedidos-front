import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { LocalidadRoutingModule } from './localidad-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { TipoCanalService } from 'src/app/services/tipo-canal.service';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';



@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    LocalidadRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [TipoCanalService]
})
export class LocalidadModule { }
