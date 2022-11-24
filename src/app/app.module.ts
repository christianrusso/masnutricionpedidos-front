import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './components/core/core.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TipoCanalService } from './services/tipo-canal.service';
import { TipoClienteService } from './services/tipo-cliente.service';
import { TipoCondicionesVentaService } from './services/tipo-condiciones-venta.service';
import { TipoFamiliaProductoService } from './services/tipo-familia-producto.service';
import { TipoIvaService } from './services/tipo-iva.service';
import { TipoPermisoService } from './services/tipo-permiso.service';
import { TipoProductoService } from './services/tipo-producto.service';
import { TipoReglaComercialService } from './services/tipo-regla-comercial.service';
import { TipoTelefonoService } from './services/tipo-telefono.service';
import { AuthService } from './services/auth.service';
import { TipoCanalModule} from './components/tipo-canal/tipo-canal.module';
import { TipoClienteModule } from './components/tipo-cliente/tipo-cliente.module';
import { TipoCondicionesModule } from './components/tipo-condiciones/tipo-condiciones.module';
import { TipoFamiliaProductoModule } from './components/tipo-familia/tipo-familia.module';
import { TipoIVAModule } from './components/tipo-iva/tipo-iva.module';
import { TipoPermisoModule } from './components/tipo-permiso/tipo-permiso.module';
import { TipoReglaComercialModule } from './components/tipo-regla/tipo-regla.module';
import { TipoTelefonoModule } from './components/tipo-telefono/tipo-telefono.module';
import { AuthModule } from './components/auth/auth.module';
import { ClienteService } from './services/cliente.service';



@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    TipoCanalModule,
    TipoClienteModule,
    TipoCondicionesModule,
    TipoFamiliaProductoModule,
    TipoIVAModule,
    TipoPermisoModule,
    TipoReglaComercialModule,
    TipoTelefonoModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    ClienteService,
    TipoCanalService,
    TipoClienteService,
    TipoCondicionesVentaService,
    TipoFamiliaProductoService,
    TipoIvaService,
    TipoPermisoService,
    TipoProductoService,
    TipoReglaComercialService,
    TipoTelefonoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
