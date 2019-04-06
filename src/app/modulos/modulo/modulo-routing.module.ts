import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloListComponent } from './modulo-list/modulo-list.component';
import { ModuloCreateComponent } from './modulo-create/modulo-create.component';

const routes: Routes = [
  { path: '', component: ModuloListComponent },
  { path: 'add', component: ModuloCreateComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloRoutingModule { }
