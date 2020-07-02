import { MenuItem } from '../../componentes/layout/menu-lateral/menu-item.model'
import { Injectable, EventEmitter } from '@angular/core'
import { MenuConsts } from './menu.consts';
import { SegurancaService } from '../seguranca/seguranca.service';

@Injectable({providedIn: 'root'})
export class AplicacaoService {

  menuConsts = new MenuConsts()
  _menuDisponivel: MenuItem[] = []
  menuEvent = new EventEmitter<MenuItem[]>()

  constructor(private seguranca: SegurancaService) { }

  public mountMenu() {
    if (this.seguranca.isLogado) {
      this.mountMenuLogado()
    } else {
      this.mountDefaultMenu()
    }
    this.menuEvent.emit(this._menuDisponivel)
  }

  private mountMenuLogado() {
    this._menuDisponivel = [
      this.menuConsts.dashboard,
      this.menuConsts.usuario,
      this.menuConsts.projeto,
      this.menuConsts.apps,
      this.menuConsts.configuracoes,
      this.menuConsts.logout,
    ]
  }

  private mountDefaultMenu() {
    this._menuDisponivel = [
      this.menuConsts.dashboard,
      this.menuConsts.cadastro,
      this.menuConsts.login,
      this.menuConsts.configuracoes
    ]
  }
}
