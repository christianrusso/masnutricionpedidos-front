import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { CanalComponent } from './containers/canal/canal.component';
import { ClienteComponent } from './containers/cliente/cliente.component';
import { CondicionesVentaComponent } from './containers/condiciones-venta/condiciones-venta.component';
import { FamiliaProductoComponent } from './containers/familia-producto/familia-producto.component';
import { IVAComponent } from './containers/iva/iva.component';
import { PermisoComponent } from './containers/permiso/permiso.component';
import { ProductoComponent } from './containers/producto/producto.component';
import { ReglaComercialComponent } from './containers/regla-comercial/regla-comercial.component';
import { TelefonoComponent } from './containers/telefono/telefono.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'masnutricion',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'masnutricion',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },

    ]
  },
  {
    path: 'masnutricion',
    component: DefaultLayoutComponent,
    children: [
      { path: 'canal', component: CanalComponent },
      { path: 'cliente', component: ClienteComponent },
      { path: 'condiciones', component: CondicionesVentaComponent },
      { path: 'familia', component: FamiliaProductoComponent },
      { path: 'iva', component: IVAComponent },
      { path: 'permiso', component: PermisoComponent },
      { path: 'producto', component: ProductoComponent },
      { path: 'regla', component: ReglaComercialComponent },
      { path: 'telefono', component: TelefonoComponent },

    ]
  },



  {path: '**', redirectTo: 'masnutricion'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
