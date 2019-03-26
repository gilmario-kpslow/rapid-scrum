import { Component, OnInit, Input } from '@angular/core';
import { Sistema } from 'src/app/modulos/sistema/sistema';

@Component({
  selector: 'app-sistema-card',
  templateUrl: './sistema-card.component.html',
  styleUrls: ['./sistema-card.component.css']
})
export class SistemaCardComponent implements OnInit {

  @Input() sistema: Sistema;
  constructor() { }

  ngOnInit() {
  }

}
