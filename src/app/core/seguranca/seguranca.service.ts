import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../usuario/usuario';

const TOKEN = 'token'

@Injectable({providedIn: 'root'})
export class SegurancaService {

    private usuario: Usuario
    private logadoEvent: EventEmitter<boolean> = new EventEmitter()
    private usuarioEvent: EventEmitter<Usuario> = new EventEmitter()

    constructor() {
    }

    private token: string

    remove() {
        sessionStorage.clear()
    }

    public setToken(token: string): void {
        this.token = token
    }

    public getToken(): string {
        return this.token
    }

    public isLogado(fn?: any) {
        return this.logadoEvent.subscribe((e) => fn(e))
    }

    public tokenIsValido(): boolean {
        return (sessionStorage.length > 0 && this.usuario !== null)
    }

    setUsuarioLogado(usuario: Usuario) {
      this.usuario = usuario
      this.usuarioEvent.emit(this.usuario)
      this.logadoEvent.emit(true)
    }

    getUsuario(fn?: any) {
      return this.usuarioEvent.subscribe((u) => fn(u))
    }
}
