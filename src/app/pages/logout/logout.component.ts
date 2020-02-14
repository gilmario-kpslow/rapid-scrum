import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AplicacaoService } from '../../core/applicacao/aplicacao.service'
import { SegurancaService } from '../../core/seguranca/seguranca.service'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private autenticado: SegurancaService, private router: Router, private appService: AplicacaoService) { }

  ngOnInit() {
    this.autenticado.remove()
    this.appService.mountMenu()
    this.router.navigate(this.appService.menuConsts.dashboard.rota)
  }

}
