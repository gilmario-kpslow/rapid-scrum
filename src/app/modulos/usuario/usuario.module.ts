import { NgModule } from '@angular/core'
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component'
import { LayoutModule } from '../../componentes/layout/layout.module'
import { UsuarioService } from '../../core/usuario/usuario.service'
import { UsuarioRoutingModule } from './usuario-routing.module'
import { RapidInputBaseComponent } from 'src/app/componentes/rapid-input/rapid-input-base/rapid-input-base.component'
import { RapidInputModule } from '../../componentes/rapid-input/rapid-input.module';

@NgModule({
  declarations: [UsuarioCadastroComponent],
  imports: [
    LayoutModule,
    UsuarioRoutingModule,
    RapidInputModule
  ],
  providers : [
    UsuarioService
  ]
})
export class UsuarioModule { }
