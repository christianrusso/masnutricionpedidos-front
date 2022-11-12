import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ListarComponent } from './listar/listar.component';
import { ModificarComponent } from './modificar/modificar.component';

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
    redirectTo: '/regla-comercial/listar',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReglaComercialRoutingModule {}
