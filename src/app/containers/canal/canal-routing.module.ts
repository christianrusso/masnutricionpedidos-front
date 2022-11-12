import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent,
  },
  {
    path: 'crear',
    component: CrearComponent,
  },
  {
    path: 'modificar',
    component: ModificarComponent,
  },
  {
    path: 'eliminar',
    component: EliminarComponent,
  },
  {
    path: '',
    redirectTo: '/canal/listar',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanalRoutingModule {}
