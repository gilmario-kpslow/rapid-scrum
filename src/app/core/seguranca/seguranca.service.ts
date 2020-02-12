import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { UsuarioAutenticado } from './usuario-autenticado'

const TOKEN = 'token'

@Injectable({providedIn: 'root'})
export class SegurancaService {

    private usuario: UsuarioAutenticado
    private logadoEvent: EventEmitter<boolean> = new EventEmitter()
    private usuarioEvent: EventEmitter<UsuarioAutenticado> = new EventEmitter()

    constructor() {
        const json = localStorage.getItem(TOKEN);
        if (json) {
            this.usuario = JSON.parse(json);
        }
    }

    private saveUsuario(usuario: UsuarioAutenticado) {
        if(usuario) {
            localStorage.setItem(TOKEN, JSON.stringify(usuario));
        } else {
            throw new Error("Nao pode salvar um usuario nulo")
        }
    }

    remove() {
        localStorage.clear()
    }

    public setToken(token: string): void {
        this.usuario.token = token
    }

    public getToken(): string {
        return this.usuario.token
    }

    public isLogado(fn?: any) {
        return this.logadoEvent.subscribe((e) => fn(e))
    }

    public tokenIsValido(): boolean {
        return (sessionStorage.length > 0 && this.usuario !== null)
    }

    setUsuarioLogado(usuario: Usuario) {
      this.usuario = new UsuarioAutenticado();
      this.usuario.nome = usuario.nome;
      this.usuarioEvent.emit(this.usuario)
      this.logadoEvent.emit(true)
    }

    getUsuario(fn?: any) {
      return this.usuarioEvent.subscribe((u) => fn(u))
    }
}
