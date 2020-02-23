import { GenericService } from '../generics/generic.service'
import { Usuario } from './usuario'
import { Injector } from '@angular/core'
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export class UsuarioService extends GenericService<Usuario> {

  constructor(private injector: Injector) {
    super('usuario', injector, Usuario)
  }

  salvar(entity: Usuario): Observable<Usuario> {
    return this._http.post<Usuario>(`${this._url}`, entity)
    .pipe(take(1))
  }
}
