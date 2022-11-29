import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth/login/auth.guard';
import { IsAuthGuard } from './components/auth/login/isAuth.guard';
import { CoreComponent } from './components/core/core.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
      canActivate: [IsAuthGuard]
  },
  {
    path: 'home',
    component: CoreComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'tipo-canal',
        loadChildren: () =>
          import('./components/tipo-canal/tipo-canal.module').then(
            (m) => m.TipoCanalModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'tipo-cliente',
        loadChildren: () =>
          import('./components/tipo-cliente/tipo-cliente.module').then(
            (m) => m.TipoClienteModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'tipo-condiciones',
        loadChildren: () =>
          import('./components/tipo-condiciones/tipo-condiciones.module').then(
            (m) => m.TipoCondicionesModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'tipo-familia-producto',
        loadChildren: () =>
          import('./components/tipo-familia/tipo-familia.module').then(
            (m) => m.TipoFamiliaProductoModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'tipo-iva',
        loadChildren: () =>
          import('./components/tipo-iva/tipo-iva.module').then(
            (m) => m.TipoIVAModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'tipo-permisos',
        loadChildren: () =>
          import('./components/tipo-permiso/tipo-permiso.module').then(
            (m) => m.TipoPermisoModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'tipo-productos',
        loadChildren: () =>
          import('./components/tipo-producto/tipo-producto.module').then(
            (m) => m.TipoProductoModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'tipo-regla-comercial',
        loadChildren: () =>
          import('./components/tipo-regla/tipo-regla.module').then(
            (m) => m.TipoReglaComercialModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'tipo-telefonos',
        loadChildren: () =>
          import('./components/tipo-telefono/tipo-telefono.module').then(
            (m) => m.TipoTelefonoModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'cliente',
        loadChildren: () =>
          import('./components/cliente/cliente.module').then(
            (m) => m.ClienteModule
          ),
        canActivate: [AuthGuard],
      },
       {
         path: 'pedido',
         loadChildren: () =>
           import('./components/pedido/pedido.module').then(
             (m) => m.PedidoModule
           ),
         canActivate: [AuthGuard],
       },
      {
        path: 'empresa',
        loadChildren: () =>
          import('./components/empresa/empresa.module').then(
            (m) => m.EmpresaModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'vendedor',
        loadChildren: () =>
          import('./components/vendedor/vendedor.module').then(
            (m) => m.VendedorModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'provincia',
        loadChildren: () =>
          import('./components/provincia/provincia.module').then(
            (m) => m.ProvinciaModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'localidad',
        loadChildren: () =>
          import('./components/localidad/localidad.module').then(
            (m) => m.LocalidadModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
