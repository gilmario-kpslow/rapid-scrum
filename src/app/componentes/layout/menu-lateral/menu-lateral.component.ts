import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model'
import { SegurancaService } from '../../../core/seguranca/seguranca.service'
import { AplicacaoService } from '../../../core/applicacao/aplicacao.service'

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  menu: MenuItem[]
  logado = false
  constructor(private service: SegurancaService, private applicacaoService: AplicacaoService) {
    this.menu = applicacaoService._menuDisponivel
    this.logado = service.isLogado
  }

  ngOnInit() {
    this.service.getLogoutEvent((e) => {
      this.logado = e
    })
    this.applicacaoService.menuEvent.subscribe(menu => {
      this.menu = menu
    })
  }

  isLogado() {
    return this.logado
  }

}
