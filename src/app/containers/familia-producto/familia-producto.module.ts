import { NgModule } from '@angular/core';

import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { CardModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FamiliaProductoRoutingModule } from './familia-producto-routing.module';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    EliminarComponent,
  ],
  imports: [GridModule, IconModule, CardModule, FamiliaProductoRoutingModule],
})
export class FamiliaProductoModule {}
