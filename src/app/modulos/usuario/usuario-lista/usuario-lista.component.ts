import { Component, OnInit } from '@angular/core'
import { UsuarioService } from '../../../core/usuario/usuario.service'
import { info } from '../../../core/util/log_util'

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent implements OnInit {

  lista = []
  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.service.listar().subscribe(lista => {
      info(lista)
      this.lista = lista
    })
  }

  consultar(input: string) {
    info(input)
  }

}
