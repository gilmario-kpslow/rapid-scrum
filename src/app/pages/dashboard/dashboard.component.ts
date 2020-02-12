import { Component, OnInit } from '@angular/core'
import { Projeto } from '../../core/projeto/projeto.model'
import { ProjetoService } from '../../core/projeto/projeto.service'
import { Usuario } from '../../core/usuario/usuario'
import { SegurancaService } from '../../core/seguranca/seguranca.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  projetos: Projeto[] = []
  usuario: Usuario
  image = 'assets/images/default-project.svg'
  constructor(
    private service: ProjetoService,
    private segurancaService: SegurancaService
  ) { }

  ngOnInit() {
    this.segurancaService.getUsuario((u) => this.usuario = u)
    const projeto = new Projeto()
    projeto.nome = "Sistema integrado de gestao empresarial"
    projeto.descricao = "Sistema para o gerenciamento de empresas"
    projeto.sigla = "SIGE"
    this.projetos.push(projeto)


  }

}
