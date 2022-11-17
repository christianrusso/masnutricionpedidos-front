import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'canal',
        loadChildren: () =>
        import('./../app/components/canal/canal.module').then(
          (m) => m.CanalModule
        ),
      },
      {
        path: 'cliente',
        loadChildren: () =>
        import('./../app/components/cliente/cliente.module').then(
          (m) => m.ClienteModule
        ),
      },
      {
        path: 'condiciones',
        loadChildren: () =>
        import('./../app/components/condiciones/condiciones.module').then(
          (m) => m.CondicionesModule
        ),
      },
      {
        path: 'familia-producto',
        loadChildren: () =>
        import('./../app/components/familia/familia.module').then(
          (m) => m.FamiliaProductoModule
        ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
