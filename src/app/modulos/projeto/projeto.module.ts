import { NgModule } from '@angular/core'
import { LayoutModule } from '../../componentes/layout/layout.module'
import { ProjetoDashComponent } from './projeto-dash/projeto-dash.component'
import { ProjetoCriarComponent } from './projeto-criar/projeto-criar.component'
import { ProjetoRoutingModule } from './projeto-routing.module'



@NgModule({
  declarations: [ProjetoDashComponent, ProjetoCriarComponent],
  imports: [
    LayoutModule,
    ProjetoRoutingModule
  ],
  exports: [
    ProjetoDashComponent
  ]
})
export class ProjetoModule { }
