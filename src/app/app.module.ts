import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './components/core/core.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CanalModule} from '../app/components/canal/canal.module';

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
import { ClienteModule } from './components/cliente/cliente.module';
import { CondicionesModule } from './components/condiciones/condiciones.module';



@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CanalModule,
    ClienteModule,
    CondicionesModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
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
  bootstrap: [AppComponent]
})
export class AppModule { }
