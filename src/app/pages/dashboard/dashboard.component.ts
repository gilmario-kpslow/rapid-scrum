import { SistemaService } from './../../modulos/sistema/sistema.service'
import { Component, OnInit } from '@angular/core'
import { Sistema } from '../../modulos/sistema/sistema'
import { Projeto } from '../../core/projeto/projeto.model'
import { ProjetoService } from '../../core/projeto/projeto.service'
import { Usuario } from '../../core/usuario/usuario';
import { SegurancaService } from '../../core/seguranca/seguranca.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  projetos: Projeto[] = []
  usuario: Usuario
  constructor(
    private service: ProjetoService,
    private segurancaService: SegurancaService
  ) { }

  ngOnInit() {
    this.service.listar().subscribe(lista => this.projetos = lista)
    this.segurancaService.getUsuario((u) => this.usuario = u)
  }

}
