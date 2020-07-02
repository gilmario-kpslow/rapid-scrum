import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() lista: any[]
  @Input() titulo: string
  @Input() subtitulo: string
  @Input() imagem: string
  @Input() descricao: string
  consulta = new FormControl()
  @Output() search = new EventEmitter()
  constructor() {}

  ngOnInit() {
  }

  consultar() {
    this.search.emit(this.consulta.value)
  }

}
