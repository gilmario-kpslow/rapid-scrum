import { Component, AfterContentInit } from '@angular/core'
import { AplicacaoService } from './core/applicacao/aplicacao.service'
import { Router, NavigationStart } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  constructor(private appService: AplicacaoService, private router: Router) {}

  ngAfterContentInit() {
    this.appService.mountMenu()
  }


}
