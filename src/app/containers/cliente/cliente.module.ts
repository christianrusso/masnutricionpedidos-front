import { NgModule } from '@angular/core';

import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ClienteRoutingModule } from './cliente-routing.module';

import { CardModule, FormModule, GridModule } from '@coreui/angular';
import { TableModule, UtilitiesModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ButtonModule } from '@coreui/angular';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    EliminarComponent,
  ],
  imports: [GridModule, IconModule, CardModule, ClienteRoutingModule, TableModule,
    UtilitiesModule, FormModule, ButtonModule],
})
export class ClienteModule {}
