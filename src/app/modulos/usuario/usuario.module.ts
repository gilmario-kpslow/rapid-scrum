import { NgModule } from '@angular/core'
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component'
import { LayoutModule } from '../../componentes/layout/layout.module'
import { UsuarioService } from '../../core/usuario/usuario.service'
import { UsuarioRoutingModule } from './usuario-routing.module'
import { ComponentesModule } from '../../componentes/componentes.module';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component'

@NgModule({
  declarations: [UsuarioCadastroComponent, UsuarioListaComponent],
  imports: [
    LayoutModule,
    UsuarioRoutingModule,
    ComponentesModule
  ],
  providers : [
    UsuarioService
  ]
})
export class UsuarioModule { }
