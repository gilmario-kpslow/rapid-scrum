import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { BaseLayoutComponent } from './componentes/layout/base-layout/base-layout.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {path: '', component: BaseLayoutComponent, children: [
    // {path: '', component: BlankComponent},
    {path: '', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro',  loadChildren: './modulos/usuario/usuario.module#UsuarioModule'},
    {path: 'sistema', loadChildren: './modulos/sistema/sistema.module#SistemaModule'},
    {path: 'modulo', loadChildren: './modulos/modulo/modulo.module#ModuloModule'},
    {path: 'projeto', loadChildren: './modulos/projeto/projeto.module#ProjetoModule'},
    {path: 'game', loadChildren: './modulos/game/game.module#GameModule'}
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
