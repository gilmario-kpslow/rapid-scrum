import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDashComponent } from './game-dash/game-dash.component';
import { LayoutModule } from '../../componentes/layout/layout.module';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [GameDashComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    LayoutModule
  ]
})
export class GameModule { }
