import { Component, OnInit, HostBinding, HostListener, ViewChildren, ContentChildren, ElementRef, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

const EXPANDIDO = 'expandido';
const FECHADO = 'fechado';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css'],
  animations: [
    trigger('expandir', [
      state(EXPANDIDO, style({display: 'block', transform: 'translate(0)', opacity: '1'})),
      state(FECHADO, style({transform: 'translate(100%)', display: 'none', opacity: '0'})),

      transition(`${FECHADO} => ${EXPANDIDO}`, [
        animate('0.25s', keyframes([
          style({ display: 'block', offset: 0, transform: 'translate(100%)', opacity: '0'}),
          style({transform: 'translate(0)', opacity: '1', offset: 1.0})
        ]))
      ]),
      transition(`${EXPANDIDO} => ${FECHADO}`, [
        animate('0.25s', keyframes([
          style({ display: 'block', offset: 0, transform: 'translate(0)', opacity: '1'}),
          style({transform: 'translate(100%)', opacity: '0', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class ActionButtonComponent implements OnInit {

  visivel = false;
  status = FECHADO;
  @Input() left = 1;
  constructor() { }

  @HostListener('mouseover')
  onmouseover(): void {
    this.visivel = true;
    this.status = EXPANDIDO;
  }

  @HostListener('mouseleave')
  onmouseout(): void {
    this.back();
    this.status = FECHADO;
  }

  ngOnInit() {
  }

  @HostListener('document:click')
  back() {
    this.visivel = false;
  }

  marginLeft(): string {
    return `-${(this.left * 30) - 30}px`;
  }


}
