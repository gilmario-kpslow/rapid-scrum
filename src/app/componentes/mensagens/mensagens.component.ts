import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Mensagem } from './mensagem.interface';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit, OnDestroy {

  @Input() mensagem: Mensagem;
  active = true;
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.active = false;
  }

  ngOnDestroy() {
    this.active = false;
  }

}
