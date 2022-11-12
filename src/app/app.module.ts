import { NgModule } from '@angular/core';
import {
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';

import { CanalService } from './services/canal.service';
import { ClienteService } from './services/cliente.service';
import { CondicionesVentaService } from './services/condiciones-venta.service';
import { FamiliaProductoService } from './services/familia-producto.service';
import { IvaService } from './services/iva.service';
import { PermisoService } from './services/permiso.service';
import { ProductoService } from './services/producto.service';
import { ReglaComercialService } from './services/regla-comercial.service';
import { TelefonoService } from './services/telefono.service';
import { AuthService } from './services/auth.service';



import {CanalModule} from './../app/containers/canal/canal.module'
import {ClienteModule} from './../app/containers/cliente/cliente.module'
import {CondicionesVentaModule} from './../app/containers/condiciones-venta/condiciones-venta.module'
import {FamiliaProductoModule} from './../app/containers/familia-producto/familia-producto.module'
import {PermisoModule} from './../app/containers/permiso/permiso.module'
import {IvaModule} from './../app/containers/iva/iva.module'
import {ProductoModule} from './../app/containers/producto/producto.module'
import {TelefonoModule} from './../app/containers/telefono/telefono.module'
import {ReglaComercialModule} from './../app/containers/regla-comercial/regla-comercial.module'

import {BaseModule} from '../app/views/base/base.module'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [DefaultHeaderComponent, DefaultLayoutComponent];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    BaseModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    CanalModule,
    ClienteModule,
    CondicionesVentaModule,
    FamiliaProductoModule,
    PermisoModule,
    IvaModule,
    ProductoModule,
    TelefonoModule,
    ReglaComercialModule

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title,
    CanalService,
    ClienteService,
    CondicionesVentaService,
    FamiliaProductoService,
    IvaService,
    PermisoService,
    ProductoService,
    ReglaComercialService,
    TelefonoService,
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
