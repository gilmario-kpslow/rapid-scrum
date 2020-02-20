import { Injectable, EventEmitter } from '@angular/core'
import { Usuario } from '../usuario/usuario'
import { UsuarioAutenticado } from './usuario-autenticado'
import { AplicacaoService } from '../applicacao/aplicacao.service';

const TOKEN = 'token'

@Injectable({providedIn: 'root'})
export class SegurancaService {

    private usuario: UsuarioAutenticado
    private usuarioEvent: EventEmitter<UsuarioAutenticado> = new EventEmitter()
    private logadoEvent: EventEmitter<boolean> = new EventEmitter()

    constructor() {
        const json = localStorage.getItem(TOKEN)
        if (json) {
            this.usuario = JSON.parse(json)
        }
    }

    private saveUsuario(usuario: UsuarioAutenticado) {
        if (usuario) {
            localStorage.setItem(TOKEN, JSON.stringify(usuario))
        } else {
            throw new Error("Nao pode salvar um usuario nulo")
        }
    }

    remove() {
        localStorage.clear()
        this.usuario = undefined
        this.usuarioEvent.emit(this.usuario)
        this.logadoEvent.emit(false)
    }

    public setToken(token: string): void {
        this.usuario.token = token
    }

    public getToken(): string {
        return this.usuario.token
    }

    public tokenIsValido(): boolean {
        return (localStorage.length > 0 && this.usuario !== null)
    }

    setUsuarioLogado(usuario: UsuarioAutenticado) {
      this.usuario = usuario
      this.usuarioEvent.emit(this.usuario)
      this.saveUsuario(this.usuario)
      this.logadoEvent.emit(true)
    }

    getUsuario(fn?: Function) {
      return this.usuarioEvent.subscribe((u) => fn(u))
    }

    get isLogado() {
      return this.usuario !== undefined
    }

   getLogoutEvent(fn: Function) {
    return this.logadoEvent.subscribe(u => fn(u))
   }

}
