import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { InicioComponent } from './inicio/inicio.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, InfoComponent, InicioComponent],
  imports: [BrowserModule, AppRoutingModule,BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
