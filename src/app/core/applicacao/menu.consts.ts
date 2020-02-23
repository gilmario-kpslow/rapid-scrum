import { MenuItem } from '../../componentes/layout/menu-lateral/menu-item.model'
export class MenuConsts {

  home = new MenuItem({key: 'home', nome: 'Home', rota: ['/'], icone: 'home', activeClass: ''})
  dashboard = new MenuItem({key: 'dashboard', nome: 'Dashboard', rota: ['/dashboard'], icone: 'dashboard'})
  login = new MenuItem({key: 'login', nome: 'Login', rota: ['/', 'login'], icone: 'account_box'})
  cadastro = new MenuItem({key: 'cadastro', nome: 'Participar', rota: ['/', 'registro'], icone: 'person_add'})
  projeto = new MenuItem({key: 'projeto', nome: 'Projetos', rota: ['/', 'projeto'], icone: 'description'})
  apps = new MenuItem({key: 'apps', nome: 'Apps', rota: ['/', 'apps'], icone: 'videogame_asset'})
  logout = new MenuItem({key: 'logout', nome: 'Logout', rota: ['/', 'logout'], icone: 'exit_to_app'})
  configuracoes = new MenuItem({key: 'conf', nome: 'Configuracao', rota: ['/', 'conf'], icone: 'settings'})

}
