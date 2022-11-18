import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ReglaComercialRoutingModule } from './regla-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { ReglaComercialService } from 'src/app/services/regla-comercial.service';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    ReglaComercialRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [ReglaComercialService]
})
export class ReglaComercialModule { }
