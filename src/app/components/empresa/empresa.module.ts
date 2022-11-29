import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { SharedModule } from '../../shared/shared.module';
import { ModificarComponent } from './modificar/modificar.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { EmpresaService } from 'src/app/services/empresa.service';
import { TipoClienteService } from 'src/app/services/tipo-cliente.service';
import { VendedorService } from 'src/app/services/vendedor.service';
import { EmpresaRoutingModule } from './empresa-rounting.module';



@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    ModalEliminarComponent
  ],
  imports: [
    EmpresaRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [ClienteService,TipoClienteService, EmpresaService, VendedorService]
})
export class EmpresaModule { }
