import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component'

const routes: Routes = [
  {path: '', component: UsuarioListaComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
