import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { SegurancaService } from '../../../core/seguranca/seguranca.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() clickEvent = new EventEmitter()
  logado: boolean
  constructor(private segurancaService: SegurancaService) {
    this.logado = this.segurancaService.isLogado
  }

  ngOnInit() {
    this.segurancaService.getLogoutEvent((b) => this.logado = b)
  }

  onClick() {
    this.clickEvent.emit()
  }

  isLogado() {
    return this.logado
  }

}
