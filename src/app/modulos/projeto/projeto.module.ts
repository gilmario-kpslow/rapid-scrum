import { NgModule } from '@angular/core'
import { LayoutModule } from '../../componentes/layout/layout.module'
import { ProjetoDashComponent } from './projeto-dash/projeto-dash.component'
import { ProjetoCriarComponent } from './projeto-criar/projeto-criar.component'
import { ProjetoRoutingModule } from './projeto-routing.module'
import { RapidInputModule } from '../../componentes/rapid-input/rapid-input.module';
import { ProjetoListaComponent } from './projeto/projeto-lista/projeto-lista.component';
import { MaterialModule } from '../../componentes/material/material.module';
import { ComponentesModule } from '../../componentes/componentes.module';



@NgModule({
  declarations: [ProjetoDashComponent, ProjetoCriarComponent, ProjetoListaComponent],
  imports: [
    LayoutModule,
    ProjetoRoutingModule,
    RapidInputModule,
    MaterialModule,
    ComponentesModule
  ],
  exports: [
    ProjetoDashComponent
  ]
})
export class ProjetoModule { }
