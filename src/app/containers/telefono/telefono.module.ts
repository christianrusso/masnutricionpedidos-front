import { NgModule } from '@angular/core';

import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { TelefonoRoutingModule } from './telefono-routing.module';

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
  imports: [GridModule, IconModule, CardModule, TelefonoRoutingModule, TableModule,
    UtilitiesModule, FormModule, ButtonModule],
})
export class TelefonoModule {}
