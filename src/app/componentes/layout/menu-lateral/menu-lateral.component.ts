import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model'
import { SegurancaService } from '../../../core/seguranca/seguranca.service'

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  menu: MenuItem[]
  logado = false;
  constructor(private service: SegurancaService) { }

  ngOnInit() {
    return this.service.isLogado((e) => {
      this.logado = e
      console.log(e)
    })
  }

  isLogado() {
    return this.logado
  }

}
