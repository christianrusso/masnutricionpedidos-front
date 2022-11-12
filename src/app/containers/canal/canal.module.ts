import { NgModule } from '@angular/core';

import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

import {
  CardModule,
  GridModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';




@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    EliminarComponent
  ],
  imports: [
    GridModule,
    IconModule,
    CardModule
  ],
})
export class CanalModule { }
