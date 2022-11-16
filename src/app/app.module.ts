import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './components/core/core.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanalComponent } from './components/canal/canal.component';

import {CanalModule} from '../app/components/canal/canal.module';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    CanalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CanalModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
