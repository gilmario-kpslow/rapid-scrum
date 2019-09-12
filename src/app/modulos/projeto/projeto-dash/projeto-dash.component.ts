import { Component, OnInit, Input } from '@angular/core'
import { Projeto } from 'src/app/core/projeto/projeto.model'
import { info } from '../../../core/util/log_util'
import { Router } from '@angular/router'

@Component({
  selector: 'app-projeto-dash',
  templateUrl: './projeto-dash.component.html',
  styleUrls: ['./projeto-dash.component.scss']
})
export class ProjetoDashComponent implements OnInit {

  @Input() projetos: Projeto[]
  constructor(private router: Router) { }

  ngOnInit() {
    info(this.projetos)
  }

  novo() {
    this.router.navigate(['projeto', 'novo'])
  }

}
