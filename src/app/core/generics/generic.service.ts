import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Serializador } from './serializador'
import { map, take, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { GenericEntity } from './generic-entity'
import { Injector } from '@angular/core'

export abstract class GenericService<T extends GenericEntity> {

  protected serializador: Serializador<T>
  protected _url: string
  protected _injector: Injector
  protected _http: HttpClient
  constructor(_url: string, injector: Injector, private type: {new (): T}) {
    this._url = `${environment.api}/${_url}`
    this._injector = injector
    this._http = this._injector.get(HttpClient);
    this.serializador = new Serializador<T>(this.type)
   }

  listar(): Observable<T[]> {
    return this._http.get<any[]>(`${this._url}`)
    .pipe( map(lista => this.deserializeList(lista)))
    .pipe( take(1))
  }

  save(entity: T) {
    return this._http.post(`${this._url}`, entity)
    .pipe( take(1))
  }

  remover(id: number): Observable<void> {
    return this._http.delete<void>(`${this._url}/${id}`)
      .pipe(take(1))
  }

  protected deserializeList(lista: T[]): T[] {
    return lista.map(e => this.deserialize(e))
  }

  protected deserialize(e: any): T {
    return this.serializador.fromJson(e)
  }

}

