import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'tipo-canal',
        loadChildren: () =>
        import('./components/tipo-canal/tipo-canal.module').then(
          (m) => m.TipoCanalModule
        ),
      },
      {
        path: 'tipo-cliente',
        loadChildren: () =>
        import('./components/tipo-cliente/tipo-cliente.module').then(
          (m) => m.TipoClienteModule
        ),
      },
      {
        path: 'tipo-condiciones',
        loadChildren: () =>
        import('./components/tipo-condiciones/tipo-condiciones.module').then(
          (m) => m.TipoCondicionesModule
        ),
      },
      {
        path: 'tipo-familia-producto',
        loadChildren: () =>
        import('./components/tipo-familia/tipo-familia.module').then(
          (m) => m.TipoFamiliaProductoModule
        ),
      },
      {
        path: 'tipo-iva',
        loadChildren: () =>
        import('./components/tipo-iva/tipo-iva.module').then(
          (m) => m.TipoIVAModule
        ),
      },
      {
        path: 'tipo-permisos',
        loadChildren: () =>
        import('./components/tipo-permiso/tipo-permiso.module').then(
          (m) => m.TipoPermisoModule
        ),
      },
      {
        path: 'tipo-productos',
        loadChildren: () =>
        import('./components/tipo-producto/tipo-producto.module').then(
          (m) => m.TipoProductoModule
        ),
      },
      {
        path: 'tipo-regla-comercial',
        loadChildren: () =>
        import('./components/tipo-regla/tipo-regla.module').then(
          (m) => m.TipoReglaComercialModule
        ),
      },
      {
        path: 'tipo-telefonos',
        loadChildren: () =>
        import('./components/tipo-telefono/tipo-telefono.module').then(
          (m) => m.TipoTelefonoModule
        ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
