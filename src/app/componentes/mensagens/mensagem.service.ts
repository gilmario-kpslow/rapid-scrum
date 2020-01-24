import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Mensagem } from './mensagem.interface';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  event: EventEmitter<Mensagem> = new EventEmitter();
  constructor() { }

  erro(mensagem: string, titulo: string = 'Erro!') {
    this.message('alert-danger', 'icon fa fa-ban', titulo, mensagem);
  }

  warn(mensagem: string, titulo: string = 'Atenção!') {
    this.message('alert-warning', 'icon fa fa-warning', titulo, mensagem);
  }

  success(mensagem: string = 'Operação realizada com sucesso.', titulo: string = 'Ok!') {
    this.message('alert-success', 'icon fa fa-check', titulo, mensagem);
  }

  info(mensagem: string, titulo: string = 'Informação!') {
    this.message('alert-info', 'icon fa fa-info', titulo, mensagem);
  }

  message(tipo: string, icon: string, titulo: string, mensagem: string) {
    this.event.emit({tipo, icon, titulo, mensagem});
  }
}
