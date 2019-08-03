import { SistemaService } from './../../modulos/sistema/sistema.service'
import { Component, OnInit } from '@angular/core'
import { Sistema } from '../../modulos/sistema/sistema'
import { Projeto } from '../../core/projeto/projeto.model'
import { ProjetoService } from '../../core/projeto/projeto.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  projetos: Projeto[] = []
  constructor(
    private service: ProjetoService
  ) { }

  ngOnInit() {
    this.service.listar().subscribe(lista => this.projetos = lista)
  }

}
