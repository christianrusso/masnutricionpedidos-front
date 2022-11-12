import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    children: [
      {
        path: 'canal',
        loadChildren: () =>
          import('./containers/canal/canal.module').then(
            (m) => m.CanalModule
          ),
      },
      {
        path: 'cliente',
        loadChildren: () =>
          import('./containers/cliente/cliente.module').then(
            (m) => m.ClienteModule
          ),
      },
      {
        path: 'condiciones-venta',
        loadChildren: () =>
          import('./containers/condiciones-venta/condiciones-venta.module').then(
            (m) => m.CondicionesVentaModule
          ),
      },
      {
        path: 'familia-producto',
        loadChildren: () =>
          import('./containers/familia-producto/familia-producto.module').then(
            (m) => m.FamiliaProductoModule
          ),
      },
      {
        path: 'iva',
        loadChildren: () =>
          import('./containers/iva/iva.module').then(
            (m) => m.IvaModule
          ),
      },
      {
        path: 'permiso',
        loadChildren: () =>
          import('./containers/permiso/permiso.module').then(
            (m) => m.PermisoModule
          ),
      },
      {
        path: 'producto',
        loadChildren: () =>
          import('./containers/producto/producto.module').then(
            (m) => m.ProductoModule
          ),
      },
      {
        path: 'regla-comercial',
        loadChildren: () =>
          import('./containers/regla-comercial/regla-comercial.module').then(
            (m) => m.ReglaComercialModule
          ),
      },
      {
        path: 'telefono',
        loadChildren: () =>
          import('./containers/telefono/telefono.module').then(
            (m) => m.TelefonoModule
          ),
      },
    ]
  },


//falta login

  { path: '**', redirectTo: 'layout' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
