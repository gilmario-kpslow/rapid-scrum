import { SistemaCreateComponent } from './sistema-create/sistema-create.component';
import { SistemaListComponent } from './sistema-list/sistema-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const sistemaRoutes: Routes = [
  {path: '', component: SistemaListComponent},
  {path: 'add', component: SistemaCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(sistemaRoutes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
