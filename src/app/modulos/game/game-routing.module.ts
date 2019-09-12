import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameDashComponent } from './game-dash/game-dash.component';

const routes: Routes = [
  { path: '', component: GameDashComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
