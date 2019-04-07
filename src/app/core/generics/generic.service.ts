import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Serializador } from './serializador';
import { map, take, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'

export abstract class GenericService<T> {

  protected serializador: Serializador<T>
  protected url: string
  constructor(baseUrl: string, private _http: HttpClient, private type: {new (): T}) {
    this.url = `${environment.api}/${baseUrl}`
    this.serializador = new Serializador<T>(this.type)
   }

  listar(): Observable<T[]>{
    return this._http.get<any[]>(`${this.url}`)
    .pipe( map(lista => this.deserializeList(lista)))
    .pipe( take(1))

  }

  save(entity: T) {
    return this._http.post(`${this.url}`, entity)
    .pipe( take(1))
  }

  remover(id: number): Observable<{}> {
    return this._http.delete(`${this.url}/${id}`)
      .pipe(take(1))
  }

  protected deserializeList(lista: T[]): T[] {
    return lista.map(e => this.deserialize(e));
  }

  protected deserialize(e: any): T {
    return this.serializador.fromJson(e);
  }

}

