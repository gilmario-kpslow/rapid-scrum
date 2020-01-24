import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-cadastro',
  templateUrl: './base-cadastro.component.html',
  styleUrls: ['./base-cadastro.component.css']
})
export class BaseCadastroComponent {

  @Input() titulo: string;
  @Output() saveEmitter = new EventEmitter();
  @Output() limparEmitter = new EventEmitter();

  constructor() { }

  limpar() {
    this.limparEmitter.emit();
  }

  salvar() {
    this.saveEmitter.emit();
  }

}
