import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { BaseLayoutComponent } from './componentes/layout/base-layout/base-layout.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { AuthService } from './core/interceptors/auth.service'
import { LogoutComponent } from './pages/logout/logout.component'
import { LoginGuard } from './core/seguranca/LoginGuard'

const routes: Routes = [
  {path: '', component: BaseLayoutComponent, data: {animation: 'layout'}, children: [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, data: {animation: 'dashboard'}},
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard], data: {animation: 'login'}},
    {path: 'projeto', canActivate: [AuthService], loadChildren: './modulos/projeto/projeto.module#ProjetoModule',
    data: {animation: 'projeto'}},
    {path: 'cadastro',  loadChildren: './modulos/usuario/usuario.module#UsuarioModule', data: {animation: 'cadastro'}},
    {path: 'apps', loadChildren: './modulos/game/game.module#GameModule', data: {animation: 'apps'}},
    {path: 'sistema', loadChildren: './modulos/sistema/sistema.module#SistemaModule', data: {animation: 'sistema'}},
    {path: 'modulo', loadChildren: './modulos/modulo/modulo.module#ModuloModule', data: {animation: 'modulo'}},
    {path: 'admin', loadChildren: './modulos/admin/admin.module#AdminModule', data: {animation: 'admin'}},
    {path: 'logout', component: LogoutComponent, data: {animation: 'logout'}}
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
