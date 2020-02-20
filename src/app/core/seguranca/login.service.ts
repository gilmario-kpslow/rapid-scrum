import { Injectable } from "@angular/core"
import { environment } from '../../../environments/environment'
import { Observable } from "rxjs"
import { HttpClient } from '@angular/common/http'
import { UsuarioAutenticado } from './usuario-autenticado'

@Injectable()
export class LoginService {

  urlLogin = `${environment.api}/autenticar`

  constructor(private http: HttpClient) { }

  logar(username: string, password: string): Observable<UsuarioAutenticado> {
    return this.http.post<UsuarioAutenticado>(`${this.urlLogin}`, {username, password})
  }
}
