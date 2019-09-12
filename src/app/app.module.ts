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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProjetoService } from './core/projeto/projeto.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './core/seguranca/login.service';
import { ProjetoModule } from './modulos/projeto/projeto.module';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SistemaCardComponent,
    BlankComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    ProjetoModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [SistemaService, ProjetoService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
