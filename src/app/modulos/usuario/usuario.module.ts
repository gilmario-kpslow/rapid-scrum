import { NgModule } from '@angular/core'
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component'
import { LayoutModule } from '../../componentes/layout/layout.module'
import { UsuarioService } from '../../core/usuario/usuario.service'
import { UsuarioRoutingModule } from './usuario-routing.module'

@NgModule({
  declarations: [UsuarioCadastroComponent],
  imports: [
    LayoutModule,
    UsuarioRoutingModule
  ],
  providers : [
    UsuarioService
  ]
})
export class UsuarioModule { }
