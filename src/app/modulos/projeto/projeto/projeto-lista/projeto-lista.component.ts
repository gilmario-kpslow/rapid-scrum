import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../../../../core/projeto/projeto.service';
import { Projeto } from '../../../../core/projeto/projeto.model';

@Component({
  selector: 'app-projeto-lista',
  templateUrl: './projeto-lista.component.html',
  styleUrls: ['./projeto-lista.component.scss']
})
export class ProjetoListaComponent implements OnInit {

  lista: Projeto[]
  constructor(private service: ProjetoService) { }

  ngOnInit() {
    this.service.listar().subscribe(lista => this.lista = lista)
  }

}
