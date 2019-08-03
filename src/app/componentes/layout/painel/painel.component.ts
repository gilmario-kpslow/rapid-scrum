import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  @Input() titulo: string
  @Input() subtitulo: string

  constructor() { }

  ngOnInit() {
  }

}
