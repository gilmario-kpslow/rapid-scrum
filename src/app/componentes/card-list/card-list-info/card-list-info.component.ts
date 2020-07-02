import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-card-list-info',
  templateUrl: './card-list-info.component.html',
  styleUrls: ['./card-list-info.component.scss']
})
export class CardListInfoComponent implements OnInit {

  @Input() titulo: string
  @Input() subtitulo: string
  @Input() imagem: string
  @Input() descricao: string
  constructor() { }

  ngOnInit() {
  }

}
