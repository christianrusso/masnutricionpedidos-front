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
import { EmpresaService } from './services/empresa.service';
import { VendedorService } from './services/vendedor.service';
import { ClienteModule } from './components/cliente/cliente.module';
import { PedidoService } from './services/pedido.service';
import { PedidoModule } from './components/pedido/pedido.module';
import { EmpresaModule } from './components/empresa/empresa.module';
import { VendedorModule } from './components/vendedor/vendedor.module';
import { ProvinciaModule } from './components/provincia/provincia.module';
import { LocalidadModule } from './components/localidad/localidad.module';
import { BienvenidaModule } from './components/bienvenida/bienvenida.module';
import { LocalidadService } from './services/localidad.service';
import { ProvinciaService } from './services/provincia.service';
import { DetalleOperacionService } from './services/detalle-operacion.service';
import { DetallePedidoService } from './services/detalle-pedido.service';
import { EmailService } from './services/email.service';
import { GrupoAccesoPermisoService } from './services/grupo-acceso-permiso.service';
import { GrupoAccesoService } from './services/grupo-acceso.service';
import { TelefonoService } from './services/telefono.service';
import { ProductoModule } from './components/producto/producto.module';
import { RolService } from './services/rol.service';
import { UsuarioService } from './services/usuario.service';
import { UsuarioModule } from './components/usuario/usuario.module';
import { CategoriaProductoService } from './services/categoria-producto.service';
import { PedidoEditModule } from './components/pedido-edit/pedido-edit.module';

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
    ClienteModule,
    PedidoModule,
    PedidoEditModule,
    EmpresaModule,
    VendedorModule,
    ProvinciaModule,
    LocalidadModule,
    BienvenidaModule,
    ProductoModule,
    UsuarioModule,
    TipoCanalModule,
    TipoClienteModule,
    TipoCondicionesModule,
    TipoFamiliaProductoModule,
    TipoIVAModule,
    TipoPermisoModule,
    TipoReglaComercialModule,
    TipoTelefonoModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ClienteService,
    EmpresaService,
    VendedorService,
    PedidoService,
    LocalidadService,
    ProvinciaService,
    DetalleOperacionService,
    DetallePedidoService,
    EmailService,
    GrupoAccesoPermisoService,
    GrupoAccesoService,
    TelefonoService,
    UsuarioService,
    RolService,
    CategoriaProductoService,
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
