import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ErrorHandler } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing.module'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { LoginComponent } from './pages/login/login.component'
import { LayoutModule } from './componentes/layout/layout.module'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { ProjetoService } from './core/projeto/projeto.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoginService } from './core/seguranca/login.service'
import { BlankComponent } from './blank/blank.component'
import { SistemaCardComponent } from './pages/dashboard/sistema-card/sistema-card.component'
import { ComponentesModule } from './componentes/componentes.module'
import { AppErrorHandler } from './core/interceptors/app-error.handler'
import { LogoutComponent } from './pages/logout/logout.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginGuard } from './core/seguranca/LoginGuard'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BlankComponent,
    LoginComponent,
    LogoutComponent,
    SistemaCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    ComponentesModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [ProjetoService, LoginService,
    {provide: ErrorHandler, useClass: AppErrorHandler},
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
