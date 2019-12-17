import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetoCriarComponent } from './projeto-criar/projeto-criar.component'
import { ProjetoListaComponent } from './projeto/projeto-lista/projeto-lista.component';

const routes: Routes = [
  { path: '', component: ProjetoListaComponent},
  { path: 'novo', component: ProjetoCriarComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetoRoutingModule { }
