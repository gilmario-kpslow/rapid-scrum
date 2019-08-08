import { Injectable } from "@angular/core"
import { environment } from '../../../environments/environment'
import { Observable } from "rxjs"
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../usuario/usuario';

@Injectable()
export class LoginService {



  urlLogin = `${environment.api}/login`

  constructor(private http: HttpClient) {

  }

  logar(username: string, password: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.urlLogin}`, {username, password})
  }
}
