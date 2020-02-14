export class MenuItem {

  constructor(obj: MenuItem) {
    this.key = obj.key
    this.nome = obj.nome
    this.rota = obj.rota
    this.visivel = obj.visivel
    this.activeClass = obj.activeClass || 'menu-ativo'
    this.filhos = obj.filhos || []
    this.icone = obj.icone || 'help'
    this.ordem = obj.ordem || 0
  }

  ordem?: number
  key: string
  nome: string
  rota: string[]
  visivel?: boolean
  activeClass?: string
  filhos?: MenuItem[]
  icone?: string

}
