import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Mensagem } from '../mensagem.interface';
import { MensagemService } from '../mensagem.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-mensagem-container',
  templateUrl: './mensagem-container.component.html',
  styleUrls: ['./mensagem-container.component.css']
})
export class MensagemContainerComponent implements OnInit, OnDestroy {

  lista: Mensagem[] = [];
  constructor(private eventMessage: MensagemService) { }
  ngOnInit() {
    this.eventMessage.event.subscribe(m => {
      window.scrollTo(0, 0);
      this.lista.push(m);
      timer(7000).subscribe(t => this.lista.shift());
    });
  }

  ngOnDestroy() {
    this.eventMessage.event.unsubscribe();
  }


}
