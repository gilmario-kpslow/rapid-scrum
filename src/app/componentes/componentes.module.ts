import { MensagemContainerComponent } from './mensagens/mensagem-container/mensagem-container.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoaderComponent } from './loader/loader.component'
import { DialogoComponent } from './dialogo/dialogo.component'
import { BaseListComponent } from './base-list-component/base-list.component'
import { MaterialModule } from './material/material.module'
import { BaseCadastroComponent } from './base-cadastro-component/base-cadastro.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MesanoDirective } from './directives/mesano.directive'
import { MaskDirective } from './directives/mask.directive'
import { IndicadorErrosComponent } from './indicador-erros/indicador-erros.component'
import { TimeDirective } from './directives/time.directive'
import { MensagensComponent } from './mensagens/mensagens.component'
import { ActionButtonComponent } from './action-button/action-button.component'
import { DateParseDirective } from './directives/date-parse.directive'
import { InputDefaultComponent } from './input-default/input-default.component';
import { RapidPaginatorComponent } from './rapid-paginator/rapid-paginator.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardListInfoComponent } from './card-list/card-list-info/card-list-info.component'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoaderComponent,
    DialogoComponent,
    BaseListComponent,
    BaseCadastroComponent,
    MesanoDirective,
    MaskDirective,
    IndicadorErrosComponent,
    TimeDirective,
    MensagemContainerComponent,
    MensagensComponent,
    ActionButtonComponent,
    DateParseDirective,
    InputDefaultComponent,
    RapidPaginatorComponent,
    CardListComponent,
    CardListInfoComponent

  ],
  exports: [
    LoaderComponent,
    DialogoComponent,
    BaseListComponent,
    BaseCadastroComponent,
    ReactiveFormsModule,
    MaskDirective,
    MesanoDirective,
    TimeDirective,
    IndicadorErrosComponent,
    MensagemContainerComponent,
    DateParseDirective,
    InputDefaultComponent,
    RapidPaginatorComponent,
    CardListComponent


  ],
  providers: [
  ],

  entryComponents: [
    DialogoComponent
  ]
})
export class ComponentesModule { }
