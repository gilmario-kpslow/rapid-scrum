import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutModule } from './componentes/layout/layout.module';
import { SistemaService } from './modulos/sistema/sistema.service';
import { SistemaCardComponent } from './pages/dashboard/sistema-card/sistema-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SistemaCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [SistemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
